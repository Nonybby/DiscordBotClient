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
    console.info('Removed the old Vencord Extension folder:', finalFolder);
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
console.info('Moved the newly built Vencord Extension folder to', finalFolder);

// Patch Vencord.js (final file)
const vencordPath = path.resolve(
    finalFolder,
    'dist',
    'Vencord.js',
);

const vencordContent = readFileSync(vencordPath, 'utf-8');
const patchedVencord = vencordContent.replace(
	'getInfoRows(){', // Setting plugin (Displays DBC version in settings)
	"getInfoRows(){let rows = this.getInfoRowsDefault();rows.unshift(`DiscordBotClient ${window.BotClientNative?.getBotClientVersion() || 'unknown?'}`);return rows},getInfoRowsDefault(){",
);
if (patchedVencord === vencordContent) {
	console.info('Vencord.js is already patched / Cannot patch Vencord.js');
	console.info('Please check if the file is already patched or if the patch is correct.');
	process.exit(0);
}
writeFileSync(vencordPath, patchedVencord);
console.info('Patched Vencord.js successfully');