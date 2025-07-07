const { Router } = require('express');
const Util = require('../../../../AppAssets/Util');
const { fetch } = require('undici');
const Constants = require('../../../Constants');
const proxy = require('../../../Proxy');

const app = Router();

app.get('/', async (req, res) => {
	const guild_id = req.query.guild_id;
	let guild_member = null;
	if (guild_id) {
		guild_member = await fetch(
			'https://discord.com/api/v9/guilds/' +
				guild_id +
				'/members/' +
				req.params.id,
			{
				headers: {
					authorization: req.headers.authorization,
					'user-agent': Constants.UserAgentDiscordBot,
				},
			},
		)
			.then((r) => r.json())
			.catch(() => null);
	}
	let bio = null;
	if (req.params.id === Util.getIDFromToken(req.headers.authorization)) {
		// Using bio from applications/@me
		const applicationData = await fetch(
			`https://discord.com/api/v9/applications/@me`,
			{
				headers: {
					Authorization: req.headers.authorization,
					'User-Agent': Constants.UserAgentDiscordBot,
				},
			},
		).then((res) => {
			return res.json();
		});
		bio = applicationData.description;
	}
	fetch('https://discord.com/api/v9/users/' + req.params.id, {
		headers: {
			authorization: req.headers.authorization,
			'user-agent': Constants.UserAgentDiscordBot,
		},
	})
		.then((r) => r.json())
		.then((d) =>
			res.send(Util.ProfilePatch(d, guild_member, guild_id, bio)),
		);
});

app.patch('/', (req, res) => {
	req.url = '/api/v9/users/@me';
	return proxy.web(req, res);
});

module.exports = app;
