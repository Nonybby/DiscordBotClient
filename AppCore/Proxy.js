const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({
	target: 'https://discord.com',
	secure: false,
	changeOrigin: true,
});

proxy.on('error', (err, req, res) => {
	console.error('Proxy error:', err, req, res);
	res.status(500).send({
		message: 'Internal Server Error (proxy)',
		code: 500,
		error: err.message,
		stack: err.stack,
	});
});

module.exports = proxy;
