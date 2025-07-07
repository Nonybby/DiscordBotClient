const { Router } = require('express');

const app = Router();

app.get('/', (req, res) => {
    res.send({
		country_code: 'VN',
		subdivision_code: 'SG',
	});
});

module.exports = app;
