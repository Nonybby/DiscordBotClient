const {
	app,
	BrowserWindow,
	systemPreferences,
	shell,
	session,
	Tray,
	Menu,
	screen,
	ipcMain,
	Notification,
	dialog,
} = require('electron');
const {
	scope,
	errorHandler,
	eventLogger,
	hooks,
	transports,
} = require('electron-log');
const path = require('path');
const { fetch } = require('undici');
const os = require('os');
const contextMenu = require('electron-context-menu');
const { inspect } = require('util');

const Constants = require('./Constants.js');

/**
 * @type {?DiscordBotClient}
 */
let botClient;

// Setup logger
const log = scope(Constants.APP_NAME);
Object.assign(console, scope('ConsoleProxy'));
errorHandler.startCatching({
	onError({ createIssue, error, processType, versions }) {
		log.error(error, processType, versions);
		return false;
	},
});
eventLogger.startLogging();

// https://github.com/chalk/ansi-regex/blob/main/index.js
/*
export default function ansiRegex({onlyFirst = false} = {}) {
	// Valid string terminator sequences are BEL, ESC\, and 0x9c
	const ST = '(?:\\u0007|\\u001B\\u005C|\\u009C)';
	const pattern = [
		`[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?${ST})`,
		'(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))',
	].join('|');

	return new RegExp(pattern, onlyFirst ? undefined : 'g');
}
*/
const RegexANSIEscape =
	/[\u001B\u009B][[\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\d\/#&.:=?%@~_]+)*|[a-zA-Z\d]+(?:;[-a-zA-Z\d\/#&.:=?%@~_]*)*)?(?:\u0007|\u001B\u005C|\u009C))|(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-nq-uy=><~]))/g;

hooks.push((message, transport) => {
	if (transport !== transports.file) {
		return message;
	}
	message.data = message.data.map((l) => {
		if (typeof l === 'string') {
			return l.replace(RegexANSIEscape, '');
		}
		return inspect(l);
	});
	if (
		app.isReady() &&
		botClient?.win &&
		!botClient?.win.isDestroyed() &&
		botClient?.win.webContents
	) {
		botClient.win.webContents.send(
			IPCEvent.LogFromMainProcess,
			message.scope,
			['error', 'warn', 'log'].includes(message.level)
				? message.level
				: 'debug',
			...message.data,
		);
	}
	return message;
});

const {
	version: VencordVersion,
} = require('../VencordExtension/manifest.json');

const server = require('./APIServer.js');
const ApplicationFlags = require('../AppAssets/ApplicationFlags.js');
const {
	DirectMessagesDB,
	PreloadedUserSettingsDB,
	FrecencyUserSettingsDB,
} = require('./database/index.js');
const { PreloadedUserSettings } = require('discord-protos'); // require('../DiscordProtos');
const Experiments = require('../AppAssets/Experiments.js');
const Intents = require('../AppAssets/Intents.js');
const IPCEvent = require('./IPCEvent.js');
const GlobalConfig = require('./Config.js');

BigInt.prototype.toJSON = function () {
	return this.toString();
};

class DiscordBotClient {
	logger = log;
	#shouldQuitApp = false;
	/**
	 * @type {BrowserWindow}
	 */
	win;
	/**
	 * @type {Tray}
	 */
	tray;
	/**
	 * @type {number}
	 */
	port;
	/**
	 * @type {?Electron.Session}
	 */
	customSession;
	/**
	 * @type {Map<string, BrowserWindow>}
	 */
	childWindows = new Map();
	/**
	 * @type {?BrowserWindow}
	 */
	editorWindow;
	/**
	 * @type {GlobalConfig}
	 */
	config = GlobalConfig;
	constructor() {
		this.logger.log('App starting...');
		this.initApp();
	}
	/**
	 * Load the tray
	 * @param {Electron.Menu} menu
	 */
	initTray(menu) {
		if (!this.tray) {
			this.tray = new Tray(Constants.icon16);
		}
		this.tray.setToolTip(`${Constants.APP_NAME} v${app.getVersion()}`);
		this.tray.on('click', () => {
			this.win.show();
		});
		this.tray.setContextMenu(menu);
	}
	setupTray() {
		const menu = Menu.buildFromTemplate([
			{
				label: `${Constants.APP_NAME} v${app.getVersion()}`,
				icon: Constants.icon16,
				enabled: false,
			},
			{
				type: 'separator',
			},
			{
				label: 'Check for Updates...',
				type: 'normal',
				click: () => {
					this.checkingForUpdates(true);
				},
			},
			{
				label: 'Github Repository',
				type: 'normal',
				click: () =>
					shell.openExternal(
						'https://github.com/aiko-chan-ai/DiscordBotClient',
					),
			},
			{
				type: 'separator',
			},
			{
				label: 'Reload',
				click: () => {
					this.win.reload();
				},
			},
			{
				label: 'Relaunch',
				click: () => {
					app.relaunch();
					this.#shouldQuitApp = true;
					app.quit();
				},
			},
			{
				label: 'Settings (Config Editor)',
				click: () => {
					this.openConfigEditorWindow();
				},
			},
			{
				label: 'Clear web storage and relaunch',
				click: () => {
					this.win.webContents.session
						.clearCache()
						.then(() =>
							this.win.webContents.session.clearStorageData(),
						)
						.then(() => {
							app.relaunch();
							this.#shouldQuitApp = true;
							app.quit();
						});
				},
			},
			{
				label: 'Clear local database',
				submenu: [
					{
						label: 'Clear PreloadedUserSettings',
						click: () => {
							PreloadedUserSettingsDB.deleteAll().then(() => {
								this.showNotification({
									title: 'PreloadedUserSettings has been cleared',
									body: 'This will reset all user settings.',
									silent: false,
								});
							});
						},
					},
					{
						label: 'Clear FrecencyUserSettings',
						click: () => {
							FrecencyUserSettingsDB.deleteAll().then(() => {
								this.showNotification({
									title: 'FrecencyUserSettings has been cleared',
									body: 'This will reset all user settings.',
									silent: false,
								});
							});
						},
					},
					{
						label: 'Clear opened Private Channels',
						click: () => {
							DirectMessagesDB.deleteAll().then(() => {
								this.showNotification({
									title: 'Opened Private Channels has been cleared',
									body: 'This will reset all opened Private Channels.',
									silent: false,
								});
							});
						},
					},
				],
			},
			{
				label: 'Toggle DevTools',
				click: () => {
					this.win.webContents.toggleDevTools();
				},
			},
			{
				type: 'separator',
			},
			{
				label: 'Quit',
				click: () => {
					this.#shouldQuitApp = true;
					app.quit();
				},
			},
		]);
		this.initTray(menu);
	}
	async initApp() {
		this.port = await server();
		app.setAppUserModelId(Constants.APP_NAME);
		const enabledFeatures = new Set(
			app.commandLine.getSwitchValue('enable-features').split(','),
		);
		const disabledFeatures = new Set(
			app.commandLine.getSwitchValue('disable-features').split(','),
		);
		// Allow Localhost SSL
		app.commandLine.appendSwitch('allow-insecure-localhost', 'true');
		app.commandLine.appendSwitch('ignore-certificate-errors');
		app.commandLine.appendSwitch(
			'host-rules',
			`MAP ${Constants.CustomDiscordDomain} 127.0.0.1:${this.port}`,
		);
		// Vesktop
		// Disable renderer backgrounding to prevent the app from unloading when in the background
		// https://github.com/electron/electron/issues/2822
		// https://github.com/GoogleChrome/chrome-launcher/blob/5a27dd574d47a75fec0fb50f7b774ebf8a9791ba/docs/chrome-flags-for-tools.md#task-throttling
		app.commandLine.appendSwitch('disable-renderer-backgrounding');
		app.commandLine.appendSwitch('disable-background-timer-throttling');
		app.commandLine.appendSwitch('disable-backgrounding-occluded-windows');
		// Enable & Disable Chromium Features
		Constants.enableFeatures.forEach((feature) => {
			enabledFeatures.add(feature);
		});
		Constants.disableFeatures.forEach((feature) => {
			disabledFeatures.add(feature);
		});
		const enabledFeaturesArray = enabledFeatures
			.values()
			.filter(Boolean)
			.toArray();
		const disabledFeaturesArray = disabledFeatures
			.values()
			.filter(Boolean)
			.toArray();
		if (enabledFeaturesArray.length) {
			app.commandLine.appendSwitch(
				'enable-features',
				enabledFeaturesArray.join(','),
			);
			this.logger.log(
				'Enabled Chromium features:',
				enabledFeaturesArray.join(', '),
			);
		}

		if (disabledFeaturesArray.length) {
			app.commandLine.appendSwitch(
				'disable-features',
				disabledFeaturesArray.join(','),
			);
			this.logger.log(
				'Disabled Chromium features:',
				disabledFeaturesArray.join(', '),
			);
		}
		// App Event
		app.on('window-all-closed', () => {
			if (process.platform !== 'darwin') {
				this.#shouldQuitApp = true;
				app.quit();
			}
		});

		app.on('before-quit', (event) => {
			this.logger.info('App closing...');
			this.logger.info('='.repeat(50));
		});

		app.on(
			'second-instance',
			(event, commandLine, workingDirectory, additionalData) => {
				const myWindow = BrowserWindow.getAllWindows()?.[0];
				if (myWindow) {
					myWindow.show();
				}
			},
		);
		// Handle second instance
		const gotTheLock = app.requestSingleInstanceLock();
		if (!gotTheLock) {
			this.logger.debug('Second Instance detected. Quit app...');
			this.#shouldQuitApp = true;
			app.quit();
		} else {
			app.whenReady().then(async () => {
				this.logger.info('Creating session...');
				this.customSession =
					session.fromPartition('persist:elysia_dbc');
				this.logger.info('Checking Database...');
				await Promise.all([
					DirectMessagesDB.promiseReady,
					PreloadedUserSettingsDB.promiseReady,
					FrecencyUserSettingsDB.promiseReady,
				]);
				this.checkingForUpdates(false);
				this.createWindow();
			});
		}

		// Create context menu
		// I love the new Node.js version — it supports requiring ESM modules without having to use `import`
		// https://socket.dev/blog/node-js-delivers-first-lts-with-require-esm-enabled
		contextMenu.default({
			showLearnSpelling: false,
			showSearchWithGoogle: false,
			showCopyImageAddress: true,
			showInspectElement: true,
			showSaveImage: true,
			showSaveImageAs: true,
			showSaveVideo: true,
			showSaveVideoAs: true,
		});

		this.setupIpcEvents();
	}
	get session() {
		if (this.customSession) {
			return this.customSession;
		} else {
			return session.defaultSession;
		}
	}
	async sessionPatch() {
		// Disable stripe.com
		this.session.webRequest.onBeforeRequest(
			{
				urls: ['https://*.stripe.com/*'],
			},
			(details, callback) => {
				// Cancel all requests to stripe.com
				callback({
					cancel: true,
				});
			},
		);
		// Rule 1: Remove all CSP headers
		this.session.webRequest.onHeadersReceived(
			{ urls: ['<all_urls>'], types: ['mainFrame', 'subFrame'] },
			(details, callback) => {
				// Remove both CSP and CSP-report-only
				delete details.responseHeaders['content-security-policy'];
				delete details.responseHeaders['Content-Security-Policy'];
				delete details.responseHeaders[
					'content-security-policy-report-only'
				];
				delete details.responseHeaders[
					'Content-Security-Policy-Report-Only'
				];
				callback({ responseHeaders: details.responseHeaders });
			},
		);
		// Rule 2: Force CSS content-type on GitHub raw URLs
		this.session.webRequest.onHeadersReceived(
			{
				urls: ['https://raw.githubusercontent.com/*'],
				types: ['stylesheet'],
			},
			(details, callback) => {
				const url = new URL(details.url);
				if (url.pathname.endsWith('.css')) {
					// Override Content-Type
					details.responseHeaders['content-type'] = ['text/css'];
				}
				callback({ responseHeaders: details.responseHeaders });
			},
		);
		// Load Vencord-Web Extension
		await this.session.extensions.loadExtension(Constants.VencordExtensionPath);
		this.logger.info(
			'Vencord-Web Extension loaded, version: ' + VencordVersion,
		);
	}
	async createWindow() {
		this.setupTray();
		const primaryDisplay = screen.getPrimaryDisplay();
		const { width, height } = primaryDisplay.workAreaSize;
		// Create the browser window.
		this.win = new BrowserWindow({
			width: Math.floor(width * 0.9),
			height: Math.floor(height * 0.9),
			minWidth: 940,
			minHeight: 500,
			icon: Constants.icon128,
			webPreferences: {
				webSecurity: false,
				enableRemoteModule: false,
				preload: path.join(__dirname, 'ElectronPreload.js'),
				sandbox: false,
				session: this.session,
			},
			backgroundColor: '#36393f',
			titleBarStyle: 'hidden',
			frame: false,
			title: Constants.APP_NAME,
			trafficLightPosition: { x: 10, y: 10 },
		});
		// BrowserWindow Event
		this.win
			.on('close', (event) => {
				if (!this.#shouldQuitApp) {
					event.preventDefault();
					this.win.hide();
				}
			})
			.on('hide', function (e) {
				e.preventDefault();
			});

		await this.sessionPatch();
		// Patch UserAgent (Switch Plan B SDP > Unified Plan)
		this.win.webContents.setUserAgent(Constants.UserAgentChrome);
		this.logger.info(`Electron UserData: ${app.getPath('userData')}`);
		// Microphone
		if (process.platform === 'darwin') {
			this.session.setPermissionRequestHandler(
				async (_webContents, permission, callback, details) => {
					let granted = true;
					if ('mediaTypes' in details) {
						if (details.mediaTypes?.includes('audio')) {
							granted &&=
								await systemPreferences.askForMediaAccess(
									'microphone',
								);
						}
						if (details.mediaTypes?.includes('video')) {
							granted = false;
						}
					}
					callback(granted);
				},
			);
		}
		// webContents
		if (!app.isPackaged) this.win.webContents.openDevTools();
		// Discord popout
		this.win.webContents.setWindowOpenHandler(({ url }) => {
			this.logger.log('WindowOpenHandler', url);
			switch (url) {
				case 'about:blank':
					return {
						action: 'allow',
						overrideBrowserWindowOptions: {
							icon: Constants.icon128,
							frame: true,
							autoHideMenuBar: true,
							width: 1080,
							height: 720,
							...(process.platform === 'darwin' && {
								titleBarStyle: 'hidden',
								trafficLightPosition: { x: 10, y: 10 },
							}),
							webPreferences: {
								webSecurity: false,
							},
						},
					};
				case 'https://discord.com/popout':
				case 'https://ptb.discord.com/popout':
				case 'https://canary.discord.com/popout':
				case `https://localhost:${this.port}/popout`:
					return {
						action: 'allow',
						overrideBrowserWindowOptions: {
							icon: Constants.icon128,
							frame: true,
							autoHideMenuBar: true,
							width: 1080,
							height: 720,
							titleBarStyle: 'hidden',
							trafficLightPosition: { x: 10, y: 10 },
							webPreferences: {
								webSecurity: false,
							},
						},
					};
			}

			if (
				[
					'https://checkout.paypal.com/web',
					'https://discord.com/connections',
					'https://ptb.discord.com/connections',
					'https://canary.discord.com/connections',
					`https://localhost:${this.port}/connections`,
				].some((e) => url.includes(e))
			) {
				return { action: 'deny' };
			}

			try {
				var { protocol } = new URL(url);
			} catch {
				return { action: 'deny' };
			}

			switch (protocol) {
				case 'http:':
				case 'https:':
				case 'mailto:':
				case 'steam:':
				case 'spotify:':
					shell.openExternal(url);
			}

			return { action: 'deny' };
		});
		// WebContents Event
		this.win.webContents
			.on('did-create-window', (window, details) => {
				window.show();
				window.on('closed', () => {
					this.childWindows.delete(details.frameName);
				});
				if (this.childWindows.has(details.frameName)) {
					this.childWindows.get(details.frameName).close();
				}
				this.childWindows.set(details.frameName, window);
			})
			.on('did-start-loading', () => {
				this.win.setProgressBar(2, { mode: 'indeterminate' });
			})
			.on('did-stop-loading', () => {
				this.win.setTitle(Constants.APP_NAME);
				this.win.setProgressBar(-1);
			});

		this.win.loadURL(`https://${Constants.CustomDiscordDomain}`);
	}
	setupIpcEvents() {
		ipcMain
			.on(IPCEvent.Minimize, (event, frameName) => {
				let win = frameName
					? this.childWindows.get(frameName)
					: undefined;
				win ??= this.win;
				win.minimize();
			})
			.on(IPCEvent.Maximize, (event, frameName) => {
				let win = frameName
					? this.childWindows.get(frameName)
					: undefined;
				win ??= this.win;
				if (win.isMaximized()) {
					win.restore();
				} else {
					win.maximize();
				}
			})
			.on(IPCEvent.Close, (event, frameName) => {
				if (frameName) {
					return this.childWindows.get(frameName)?.close();
				}
				this.win.hide();
			})
			.on(IPCEvent.Focus, (event, frameName) => {
				let win = frameName
					? this.childWindows.get(frameName)
					: undefined;
				win ??= this.win;
				// this.win.focus();
				win.show();
				win.setSkipTaskbar(false);
			})
			.on(IPCEvent.GetBotInfo, async (event, token) => {
				token = token.replace(/Bot/g, '').trim();
				fetch(
					`https://discord.com/api/v9/applications/@me?with_counts=true`,
					{
						headers: {
							Authorization: `Bot ${token}`,
							'User-Agent': Constants.UserAgentDiscordBot,
						},
					},
				)
					.then((res) => {
						if (!res.ok) throw new Error(res.statusText);
						return res.json();
					})
					.then((data) => {
						const flags = new ApplicationFlags(
							data.flags,
						).toArray();
						const skip = new Set([
							'GUILD_PRESENCES',
							'GUILD_MEMBERS',
							'MESSAGE_CONTENT',
						]);
						for (let i = 0; i < flags.length; i++) {
							const f = flags[i];
							if (
								f.includes('GATEWAY_PRESENCE') ||
								f.includes('GATEWAY_PRESENCE_LIMITED')
							) {
								skip.delete('GUILD_PRESENCES');
							}
							if (
								f.includes('GATEWAY_GUILD_MEMBERS') ||
								f.includes('GATEWAY_GUILD_MEMBERS_LIMITED')
							) {
								skip.delete('GUILD_MEMBERS');
							}
							if (
								f.includes('GATEWAY_MESSAGE_CONTENT') ||
								f.includes('GATEWAY_MESSAGE_CONTENT_LIMITED')
							) {
								skip.delete('MESSAGE_CONTENT');
							}
						}
						if (
							skip.has('MESSAGE_CONTENT') &&
							!this.config.config.suppress_intent_warning
						) {
							dialog.showErrorBox(
								'MESSAGE_CONTENT is required',
								'You need to enable the MESSAGE_CONTENT intent in the application settings.\nIf you want to permanently suppress this warning, change the application settings (accessible from the tray menu via right-click)',
							);
							throw new Error('MESSAGE_CONTENT is required.');
						}
						event.sender.send(IPCEvent.GetBotInfoResponse, {
							success: true,
							data,
							intents: Intents.getIntents(...Array.from(skip)),
							allShards:
								Math.ceil(
									parseInt(data.approximate_guild_count) /
										Number(
											this.config.config.guilds_per_shard,
										),
								) || 1,
						});
					})
					.catch((e) => {
						event.sender.send(IPCEvent.GetBotInfoResponse, {
							success: false,
							message: e.message,
						});
					});
			})
			.on(IPCEvent.GetDBCVersions, (event) => {
				return (event.returnValue = app.getVersion());
			})
			.on(IPCEvent.GetPreloadedUserSettings, async (event, uid) => {
				const userData = await PreloadedUserSettingsDB.get(uid);
				event.returnValue = PreloadedUserSettings.toBase64(
					PreloadedUserSettings.create(userData),
				);
			})
			.on(IPCEvent.GetExperiment, (event, type, allData, botId) => {
				if (type == 'user') {
					event.returnValue = Experiments.User(allData, botId);
				} else if (type == 'guild') {
					event.returnValue = Experiments.Guild();
				}
			})
			.on(
				IPCEvent.HandlePrivateChannel,
				async (event, type, botId, channelId, userId) => {
					this.logger.log(
						'handlePrivateChannel',
						type,
						botId,
						channelId,
						userId,
					);
					const userData = await DirectMessagesDB.get(botId);
					if (typeof userId == 'object' && userId?.id) {
						this.logger.warn(
							'UserId does not match the required format (string)',
							userId,
						);
						userId = userId.id[0]; // ??? Discord feature ???
					}
					if (type == 'add') {
						userData[channelId] = {
							type: 1,
							recipients: [
								{
									id: userId,
								},
							],
							last_message_id: null,
							is_spam: false,
							id: channelId,
							flags: 0,
						};
						await DirectMessagesDB.set(botId, userData);
					} else if (type == 'remove') {
						delete userData[channelId];
						await DirectMessagesDB.set(botId, userData);
					} else if (type == 'clear') {
						userData = {};
						await DirectMessagesDB.set(botId, userData);
					}
					event.returnValue = true;
				},
			)
			.on(IPCEvent.GetPrivateChannel, async (event, uid) => {
				const userData = await DirectMessagesDB.get(uid);
				event.returnValue = userData;
			})
			.on(IPCEvent.GetDefaultUserPatch, (event) => {
				event.returnValue = Constants.UserDefaultPatch;
			})
			.on(IPCEvent.GetLocationDiscordAPIHandle, (event) => {
				event.returnValue = 'localhost:' + this.port;
			});
		ipcMain.handle(IPCEvent.MonacoEditorGetConfig, (event) => {
			return this.config.toString();
		});
		ipcMain.handle(IPCEvent.MonacoEditorGetAutoComplete, (event) => {
			return this.config.monacoAutoComplete();
		});
		ipcMain.handle(IPCEvent.MonacoEditorSaveConfig, (event, config) => {
			// Validate and save the config
			try {
				this.config.loadConfig(config);
				this.config.save();
				this.logger.info('Config saved successfully');
				return true;
			} catch (e) {
				this.logger.error('Invalid config:', e);
				dialog.showErrorBox(
					'Invalid Config',
					`The provided config is invalid: ${e.message}`,
				);
				return false;
			}
		});
	}
	/**
	 * Show a notification
	 * @param {import('electron').NotificationConstructorOptions} options Options for the notification
	 * @param {Function} callback Callback function
	 * @returns {void}
	 */
	showNotification(options, callback) {
		const notif = new Notification(options);
		notif.once('click', () => {
			notif.close();
			if (callback && typeof callback === 'function') callback();
		});
		notif.show();
	}
	/**
	 * Compares two version strings and determines if `versionB` is newer than `versionA`.
	 * Supports version strings in the format `major.minor.patch` with an optional prefix 'v'.
	 *
	 * @param versionA - The current version (e.g., "v1.2.3" or "1.2.3").
	 * @param versionB - The new version to check (e.g., "v1.3.0" or "1.3.0").
	 * @returns `true` if `versionB` is newer than `versionA`, otherwise `false`.
	 */
	#isNewerVersion(versionA, versionB) {
		// Remove 'v' prefix if present
		const normalizeVersion = (version) => version.replace(/^v/, '');

		const parseVersion = (version) => {
			const parts = version.split('.').map(Number);
			if (parts.length !== 3 || parts.some(isNaN)) {
				throw new Error(`Invalid version format: ${version}`);
			}
			return parts;
		};

		const [vA, vB] = [
			normalizeVersion(versionA),
			normalizeVersion(versionB),
		].map(parseVersion);

		// Compare versions
		for (let i = 0; i < 3; i++) {
			if (vB[i] > vA[i]) return true;
			if (vB[i] < vA[i]) return false;
		}

		return false; // Versions are equal
	}
	checkingForUpdates(forceEmitted = false) {
		this.logger.info('Checking for updates...');
		return new Promise((resolve) => {
			fetch(
				'https://api.github.com/repos/aiko-chan-ai/DiscordBotClient/releases/latest',
			)
				.then((res) => res.json())
				.then((res) => {
					if (!app.isPackaged) {
						this.showNotification(
							{
								title: `Test mode`,
								body: `Electron v${app.getVersion()} - ${os.platform()}`,
								silent: true,
							},
							() => {
								shell.openExternal(
									'https://github.com/aiko-chan-ai/DiscordBotClient/releases',
								);
							},
						);
					} else if (
						this.#isNewerVersion(app.getVersion(), res.tag_name)
					) {
						this.showNotification(
							{
								title: `New version available: ${res.name}`,
								body: `Click here to open the update page`,
								silent: false,
							},
							() => {
								shell.openExternal(
									'https://github.com/aiko-chan-ai/DiscordBotClient/releases',
								);
							},
						);
					} else {
						if (forceEmitted)
							this.showNotification(
								{
									title: 'Update Manager',
									body: `You are using the latest version (v${app.getVersion()})`,
									silent: true,
								},
								() => {
									shell.openExternal(
										'https://github.com/aiko-chan-ai/DiscordBotClient/releases',
									);
								},
							);
					}
				})
				.catch((e) => {
					this.logger.error(e);
					this.showNotification(
						{
							title: 'Update Manager',
							body: `Unable to check for updates (v${app.getVersion()})`,
							silent: false,
						},
						() => {
							shell.openExternal(
								'https://github.com/aiko-chan-ai/DiscordBotClient/releases',
							);
						},
					);
				})
				.finally(() => resolve(true));
		});
	}
	// Editor Window
	openConfigEditorWindow() {
		if (this.editorWindow && !this.editorWindow.isDestroyed()) {
			this.editorWindow.show();
			return;
		}
		this.editorWindow = new BrowserWindow({
			width: 1080,
			height: 720,
			minWidth: 800,
			minHeight: 600,
			webPreferences: {
				webSecurity: false,
				enableRemoteModule: false,
				preload: path.join(__dirname, 'editor', 'preload.js'),
				sandbox: false,
			},
			icon: Constants.icon128,
			frame: true,
			autoHideMenuBar: true,
			...(process.platform === 'darwin' && {
				titleBarStyle: 'hidden',
				trafficLightPosition: { x: 10, y: 10 },
			}),
		});
		this.editorWindow.loadFile(
			path.join(__dirname, 'editor', 'index.html'),
		);
		this.editorWindow.on('closed', () => {
			this.editorWindow = null;
		});
	}
}

botClient = new DiscordBotClient();
