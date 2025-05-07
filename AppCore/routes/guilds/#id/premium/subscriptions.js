const { Router } = require('express');
const Constants = require('../../../../Constants');
const { fetch } = require('undici');
const SnowflakeUtil = require('../../../../../AppAssets/SnowflakeUtil');

const app = Router();

function createFakeBoost(guildId) {
	const botId = SnowflakeUtil.generate();
	return {
		id: SnowflakeUtil.generate(),
		user_id: botId,
		guild_id: guildId,
		ended: false,
		pause_ends_at: null,
		user: {
			id: botId,
			username: 'elysia',
			global_name: 'Discord Bot Client',
			avatar: null,
			avatar_decoration_data: null,
			collectibles: null,
			discriminator: '0',
			public_flags: 0,
			primary_guild: null,
			clan: null,
		},
	};
}

app.get('/', (req, res) => {
	return fetch(
		'https://discord.com/api/v9/guilds/' + req.params.id,
		{
			headers: {
				authorization: req.headers.authorization,
				'user-agent': Constants.UserAgentDiscordBot,
			},
		},
	).then((r) => r.json()).then(object => {
		if (object.premium_subscription_count && object.premium_subscription_count > 0) {
			const data = [];
			const guildId = req.params.id;
			for (let i = 0; i < object.premium_subscription_count; i++) {
				data.push(createFakeBoost(guildId));
			}
			res.send(data);
		} else {
			res.send([]);
		}
	}).catch(() => {
		res.send([]);
	});
});

module.exports = app;
