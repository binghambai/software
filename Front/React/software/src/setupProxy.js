const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        '/api',
        proxy.createProxyMiddleware({
            target: 'http://127.0.0.1:9000/api',
            // target: 'http://192.168.42.128:9000/api',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        })
    );

    app.use(
        '/java',
        proxy.createProxyMiddleware({
            target: 'http://127.0.0.1:9200/java',
            // target: 'http://192.168.42.128:9200/java',
            changeOrigin: true,
            pathRewrite: {
                '^/java': ''
            }
        })
    )
};
