const { Router } = require('express');

const app = Router();

app.all('/', (req, res) => {
	res.send({
		personalization: {
			consented: false,
		},
		usage_statistics: {
			consented: false,
		},
	})
});

module.exports = app;
