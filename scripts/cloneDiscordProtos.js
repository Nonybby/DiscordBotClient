const clone = require('git-clone/promise');
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

(async () => {
	const cloneDir = path.join('.', 'DiscordProtos');
	console.log('> Clone discord-userdoccers/discord-protos.git...');
	await clone(
		'https://github.com/discord-userdoccers/discord-protos.git',
		cloneDir,
		{
			shallow: true,
		},
	);
    // Remove .git folder
    const gitDir = path.join(cloneDir, '.git');
    fs.rmSync(gitDir, { recursive: true, force: true });
    console.log('> discord-protos clone complete:', cloneDir);
	console.log('> Install discord-protos dependencies...');
	execSync('npm i -f --verbose', {
		stdio: 'inherit',
		cwd: cloneDir,
	});
	console.log('> discord-protos dependencies installed.');
})();
