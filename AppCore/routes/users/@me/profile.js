const { Router } = require('express');
const Util = require('../../../../AppAssets/Util');
const { fetch } = require('undici');
const Constants = require('../../../Constants');

const app = Router();

app.get('/', async (req, res) => {
	const id = Util.getIDFromToken(req.headers.authorization);
	const guild_id = req.query.guild_id;
	let guild_member = null;
	if (guild_id) {
		guild_member = await fetch(
			'https://discord.com/api/v9/guilds/' + guild_id + '/members/' + id,
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
	// Using bio from applications/@me
	// Note: 
	// There was a strange behavior that occurred:
	// The Bot’s *Description* field supports up to 400 characters and **does not handle emojis automatically**,
	// whereas the *About Me* tab in the app supports up to 190 characters and **does handle emojis automatically**.
	// As a result, in some specific cases, clicking on the *About Me* tab can trigger an error and cause it to get stuck on the popup:
	// **"Careful - you have unsaved changes!"**
	// > **Emoji handling note**: When the server has an emoji that the bot does not have access to, or if the emoji has been deleted,
	// Discord will automatically remove the emoji's ID.
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
	fetch('https://discord.com/api/v9/users/@me', {
		headers: {
			authorization: req.headers.authorization,
			'user-agent': Constants.UserAgentDiscordBot,
		},
	})
		.then((r) => r.json())
		.then((d) =>
			res.send(
				Util.ProfilePatch(
					d,
					guild_member,
					guild_id,
					applicationData.description,
				),
			),
		);
});

module.exports = app;
