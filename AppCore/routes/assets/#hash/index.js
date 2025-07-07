const { Router } = require('express');
const fs = require('fs');
const path = require('path');
const { fetch } = require('undici');
const Constants = require('../../../Constants');
const proxy = require('../../../Proxy');
const config = require('../../../Config');

const staticFolder = path.resolve('.', 'AppAssets', 'assets');

if (!fs.existsSync(staticFolder)) {
	fs.mkdirSync(staticFolder);
}

const app = Router();

app.get('/', async (req, res) => {
	const fileName = req.params.hash;
	if (fileName.endsWith('.map')) {
		return res.status(404).send();
	}
	else if (fileName.endsWith('.js') && config.config.cache_assets) {
		// Readdir
		if (fs.readdirSync(staticFolder).includes(fileName)) {
			res.type('.js');
			res.send(
				fs.readFileSync(path.resolve(staticFolder, fileName), 'utf8'),
			);
		} else {
			const f = await fetch('https://discord.com/assets/' + fileName);
			const content = await f.text();
			fs.writeFileSync(path.resolve(staticFolder, fileName), content);
			res.type('.js');
			res.send(content);
		}
	} else if (fileName.endsWith('.css') && config.config.cache_assets) {
		// Readdir
		if (fs.readdirSync(staticFolder).includes(fileName)) {
			res.type('.css');
			res.send(
				fs.readFileSync(path.resolve(staticFolder, fileName), 'utf8'),
			);
		} else {
			const f = await fetch('https://discord.com/assets/' + fileName);
			const content = await f.text();
			fs.writeFileSync(path.resolve(staticFolder, fileName), content);
			res.type('.css');
			res.send(content);
		}
	} else {
		req.url = '/assets/' + fileName;
		return proxy.web(req, res);
	}
});

module.exports = app;
