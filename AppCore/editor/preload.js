const { contextBridge, ipcRenderer } = require('electron');
const IPCEvent = require('../IPCEvent');

contextBridge.exposeInMainWorld('settingsAPI', {
	getCurrentSettings() {
		return ipcRenderer.invoke(IPCEvent.MonacoEditorGetConfig);
	},
	getAutoComplete() {
		return ipcRenderer.invoke(IPCEvent.MonacoEditorGetAutoComplete);
	},
	saveCurrentSettings(value) {
		return ipcRenderer.invoke(IPCEvent.MonacoEditorSaveConfig, value);
	},
});
