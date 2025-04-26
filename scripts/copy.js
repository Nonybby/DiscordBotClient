const {
	existsSync,
	renameSync,
	rmSync,
	readFileSync,
	writeFileSync,
} = require('fs');
const path = require('path');

const finalFolder = path.resolve('.', 'VencordExtension');

if (existsSync(finalFolder)) {
    rmSync(finalFolder, { recursive: true });
    console.info('Removed folder Extension');
}

const vencordBuildPath = path.resolve(
	'.',
	'Vencord',
	'dist',
	'chromium-unpacked',
);

// Rename the folder to VencordExtension
renameSync(vencordBuildPath, finalFolder);

// Remove the dist folder
rmSync(path.resolve('.', 'Vencord', 'dist'), { recursive: true });
console.info('Moved folder Extension to ', finalFolder);

// Patching manifest.json
// const manifestPath = path.resolve(
//     finalFolder,
//     'manifest.json',
// );
// 
// let content = JSON.parse(
//     readFileSync(manifestPath, 'utf-8'),
// );
// 
// if (!content.host_permissions.find(v => v === '*://localhost:*/*')) {
//     content.host_permissions.push('*://localhost:*/*');
// }
// 
// content.content_scripts.forEach(o => {
//     if (!o.matches.find(v => v === '*://localhost:*/*')) {
//         o.matches.push('*://localhost:*/*');
//     }
// });
// 
// content.web_accessible_resources.forEach(o => {
//     if (!o.matches.find((v) => v === '*://localhost:*/*')) {
// 		o.matches.push('*://localhost:*/*');
// 	}
// });
// 
// writeFileSync(manifestPath, JSON.stringify(content));
// console.info('Patched manifest.json');

// Patch Vencord.js (final file)
const vencordPath = path.resolve(
    finalFolder,
    'dist',
    'Vencord.js',
);

const vencordContent = readFileSync(vencordPath, 'utf-8');
const patchedVencord = vencordContent.replace(
	'getInfoRows(){', // Setting plugin (Displays DBC version in settings)
	"getInfoRows(){let rows = this.getInfoRowsDefault();rows.unshift(`DiscordBotClient ${window.BotClientNative?.getBotClientVersion() || 'Test Mode'}`);return rows},getInfoRowsDefault(){",
);
if (patchedVencord === vencordContent) {
	console.info('Vencord.js is already patched / Cannot patch Vencord.js');
	console.info('Please check if the file is already patched or if the patch is correct.');
	process.exit(0);
}
writeFileSync(vencordPath, patchedVencord);
console.info('Patched Vencord.js');