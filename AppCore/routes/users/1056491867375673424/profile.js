const { Router } = require('express');
const Util = require('../../../../AppAssets/Util');
const Constants = require('../../../Constants');

const app = Router();

app.get('/', (req, res) => {
	res.send(
		Util.ProfilePatch(
			Constants.UserDefaultPatch,
			null,
			null,
			'<:woaaah:1303344038681772063> https://github.com/sponsors/aiko-chan-ai',
		),
	);
});

module.exports = app;
