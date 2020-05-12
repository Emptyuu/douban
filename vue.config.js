module.exports = {
    devServer: {
        proxy: {
            "/db": {
                "target": "https://m.douban.com/",
                "changeOrigin": true,
                "pathRewrite": {
                    "^/db": "/"
                }
            }
        }
    },
    configureWebpack: {
        externals: {
            'AMap': 'AMap' // 高德地图配置
        }
    }
}