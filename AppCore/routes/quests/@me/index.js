const { Router } = require('express');

const app = Router();

app.get('/', (req, res) => {
	res.send({
		quests: [],
		excluded_quests: [],
	});
});

module.exports = app;
