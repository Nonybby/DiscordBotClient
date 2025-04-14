const { contextBridge, ipcRenderer } = require('electron');
const IPCEvent = require('./IPCEvent');

function getUserDefaultPatch() {
	return ipcRenderer.sendSync(IPCEvent.GetDefaultUserPatch);
}

contextBridge.exposeInMainWorld('BotClientNative', {
	getBotInfo: (token) => {
		return new Promise((resolve, reject) => {
			ipcRenderer.once(IPCEvent.GetBotInfoResponse, (event, response) => {
				resolve(response);
			});
			ipcRenderer.send(IPCEvent.GetBotInfo, token);
		});
	},
	getBotClientVersion() {
		return ipcRenderer.sendSync(IPCEvent.GetDBCVersions);
	},
	getSettingProto1(id) {
		return ipcRenderer.sendSync(IPCEvent.GetPreloadedUserSettings, id);
	},
	getPrivateChannelLogin(botId, pluginSaveDMsEnable) {
		if (!pluginSaveDMsEnable)
			return [
				{
					type: 1,
					recipients: [getUserDefaultPatch()],
					last_message_id: '1000000000000000000',
					is_spam: false,
					id: '1000000000000000000',
					flags: 0,
				},
			];
		const privateChannel = ipcRenderer.sendSync(IPCEvent.GetPrivateChannel, botId);
		const allChannel = Object.values(privateChannel);
		allChannel.unshift({
			type: 1,
			recipients: [getUserDefaultPatch()],
			last_message_id: '1000000000000000000',
			is_spam: false,
			id: '1000000000000000000',
			flags: 0,
		});
		return allChannel;
	},
	getUserExperiments(allData, botId) {
		return ipcRenderer.sendSync(IPCEvent.GetExperiment, 'user', allData, botId);
	},
	getGuildExperiments() {
		return ipcRenderer.sendSync(IPCEvent.GetExperiment, 'guild');
	},
	handleOpenPrivateChannel(botId, userId, channelId) {
		return ipcRenderer.sendSync(
			IPCEvent.HandlePrivateChannel,
			'add',
			botId,
			channelId,
			userId,
		);
	},
	handleClosePrivateChannel(botId, channelId) {
		return ipcRenderer.sendSync(
			IPCEvent.HandlePrivateChannel,
			'remove',
			botId,
			channelId,
		);
	},
	clearDMsCache(botId) {
		return ipcRenderer.sendSync(IPCEvent.HandlePrivateChannel, 'clear', botId);
	},
	// Vesktop
	close() {
		ipcRenderer.send(IPCEvent.Close);
	},
	minimize() {
		ipcRenderer.send(IPCEvent.Minimize);
	},
	maximize() {
		ipcRenderer.send(IPCEvent.Maximize);
	},
	focus() {
		ipcRenderer.send(IPCEvent.Focus);
	},
});
