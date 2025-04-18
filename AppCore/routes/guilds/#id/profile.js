const { Router } = require('express');
const { fetch } = require('undici');
const app = Router();

// Convert Guild object to GuildProfile object
// with_counts

// Ref: https://github.com/discord-userdoccers/discord-userdoccers/pull/346

function convertGuildObjectToGuildProfileObject(guild) {
	if (!guild.id && guild.code) {
		return {
			isError: true,
			data: guild,
		}
	}
	return {
		isError: false,
		data: {
			id: guild.id,
			name: guild.name,
			icon_hash: guild.icon,
			member_count: guild.approximate_member_count,
			online_count: guild.approximate_presence_count,
			description: guild.description,
			banner_hash: guild.banner,
			game_application_ids: [],
			game_activity: {},
			tag: null,
			badge: 0,
			badge_color_primary: '#ff0000', // ?
			badge_color_secondary: '#800000', // ?
			badge_hash: null,
			traits: [],
			features: guild.features,
			visibility: 2,
			custom_banner_hash: null,
			premium_subscription_count: guild.premium_subscription_count,
			premium_tier: guild.premium_tier,
		},
	};
}

app.get('/', async (req, res) => {
	fetch(
		`https://discord.com/api/v9/guilds/${req.params.id}?with_counts=true`,
		{
			method: 'GET',
			headers: req.headers,
		},
	)
		.then((r) => r.json())
		.then((guild) => {
			const data = convertGuildObjectToGuildProfileObject(guild);
			return res.status(data.isError ? 403 : 200).send(data.data);
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Internal Server Error (/guilds/:id/profile)',
				code: 500,
				error: err.message,
				stack: err.stack,
			});
		});
});

module.exports = app;
