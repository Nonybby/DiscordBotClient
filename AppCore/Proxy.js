const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({
	target: 'https://discord.com',
	secure: false,
	changeOrigin: true,
});

proxy.on('error', (err, req, res) => {
	res.status(500).send({
		message: 'Internal Server Error',
		code: 500,
		error: err.message,
		stack: err.stack,
	});
});


proxy.on('proxyReq', (proxyReq, req) => {
	// Remove '/bot'
	const newPath = req.url.replace(/^\/bot/, '');
	proxyReq.path = newPath;
	console.log('Proxying request:', req.method, req.url);
});


module.exports = proxy;
