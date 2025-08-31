const clone = require('git-clone/promise');
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

(async () => {
	const cloneDir = path.join('.', 'Vencord');
	const userPluginDir = path.join(cloneDir, 'src', 'userplugins', 'botClient');

	// Clone Vencord only if not already cloned
	if (!fs.existsSync(cloneDir)) {
		console.log('> Clone Vendicated/Vencord.git...');
		await clone('https://github.com/Vendicated/Vencord.git', cloneDir, {
			shallow: true,
		});
		console.log('> Vencord clone complete.');
	} else {
		console.log('> Vencord already exists, skipping clone.');
	}

	// Clone VencordDBCPlugin only if not already cloned
	if (!fs.existsSync(userPluginDir)) {
		console.log('> Clone aiko-chan-ai/VencordDBCPlugin.git...');
		await clone(
			'https://github.com/aiko-chan-ai/VencordDBCPlugin.git',
			userPluginDir,
			{ shallow: true },
		);
		console.log('> VencordDBCPlugin clone complete.');
	} else {
		console.log('> VencordDBCPlugin already exists, skipping clone.');
	}

	console.log('> Install Vencord dependencies...');
	execSync('npm i -f --verbose', {
		stdio: 'inherit',
		cwd: cloneDir,
	});
	console.log('> Vencord dependencies installed.');
})();
