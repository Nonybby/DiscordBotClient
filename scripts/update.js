const { fetch } = require('undici');
const path = require('path');
const fs = require('fs');
const { JSDOM } = require('jsdom');
const beautifyHTML = require('js-beautify').html;

const URL = 'https://discord.com/channels/@me';

const folder = path.resolve('.', 'DiscordCore');

if (!fs.existsSync(folder)) {
	fs.mkdirSync(folder, {
		recursive: true,
	});
}

const HTMLPath = path.resolve(folder, 'index.html');

const PatchMode = false;

console.log('[Discord] Fetching HTML');

fetch(URL)
	.then((r) => r.text())
	.then((text) => {
		console.log('[Discord] Beautifying HTML');
		text = beautifyHTML(text, {
			indent_size: 4,
			indent_with_tabs: false,
			max_preserve_newlines: 5,
			preserve_newlines: true,
		});
		if (PatchMode) {
			console.log('[Discord] Start Patching HTML');
			const dom = new JSDOM(text);
			// DOM
			const window = dom.window;
			const document = window.document;
			// Script Tags
			const scriptTags = document.querySelectorAll('script');
			// Replace Environment
			const replaceEnv = {
				API_ENDPOINT: "'//' + window.location.host + '/api'",
				WEBAPP_ENDPOINT: "'//' + window.location.host",
				MIGRATION_DESTINATION_ORIGIN:
					"window.location.protocol + '//' + window.location.host",
				// PUBLIC_PATH: '//discord.com/assets/',
			};
			scriptTags.forEach((scriptTag, index) => {
				scriptTag.removeAttribute('nonce');
				if (
					scriptTag.textContent?.includes(
						'cdn-cgi/challenge-platform',
					)
				)
					scriptTag.remove();
				if (
					scriptTag.textContent?.includes('window.GLOBAL_ENV') &&
					scriptTag.textContent?.includes('SENTRY_TAGS')
				) {
					const keys = Object.keys(replaceEnv);
					scriptTag.textContent = scriptTag.textContent
						.split('\n')
						.map((s) => {
							let k = keys.find((_) => s.includes(_));
							if (k) {
								return `            "${k}": ${replaceEnv[k]},`;
							} else {
								return s;
							}
						})
						.join('\n');
					console.log('[Discord] Patch GLOBAL_ENV');
				}
			});
			text = dom.serialize();
		}
		let temp = text.split('\n');
		console.log(
			'[Discord] Build Number:',
			temp
				.find((s) => s.includes('BUILD_NUMBER'))
				.replace('BUILD_NUMBER', '')
				.match(/\w+/)[0],
			'| Hash:',
			temp
				.find((s) => s.includes('VERSION_HASH'))
				.replace('VERSION_HASH', '')
				.match(/\w+/)[0],
			'| Release Channel:',
			temp
				.find((s) => s.includes('RELEASE_CHANNEL'))
				.replace('RELEASE_CHANNEL', '')
				.match(/\w+/)[0],
		);
		fs.writeFileSync(HTMLPath, text);
		console.log(`[Discord] ${PatchMode ? 'Patched' : 'Original'} HTML:`, HTMLPath);
		require('./updateGuildExperiments')();
	});
