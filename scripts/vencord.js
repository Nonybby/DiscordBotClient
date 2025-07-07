const clone = require('git-clone/promise');
const path = require('path');
const { execSync } = require('child_process');

(async () => {
	const cloneDir = path.join('.', 'Vencord');
    console.log('> Clone Vendicated/Vencord.git...');
    await clone('https://github.com/Vendicated/Vencord.git', cloneDir, {
		shallow: true,
	});
    const userPluginDir = path.join(cloneDir, 'src', 'userplugins', 'botClient');
    console.log('> Clone aiko-chan-ai/VencordDBCPlugin.git...');
	await clone(
		'https://github.com/aiko-chan-ai/VencordDBCPlugin.git',
		userPluginDir,
		{
			shallow: true,
		},
	);
    console.log('> Vencord clone complete.');
    console.log('> VencordDBCPlugin clone complete.');
    console.log('> Install Vencord dependencies...');
    execSync('npm i -f --verbose', {
		stdio: 'inherit',
		cwd: cloneDir,
	});
    console.log('> Vencord dependencies installed.');
})();
