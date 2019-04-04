var webpackConfig = require('./webpack.config');  // 获取webpack配置
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var devServerOptions = {
    // 配置代理服务器
     proxy: { 
       '/api': 'http://localhost:3000' // 访问路由/api，会转发到localhost:3000的地址去
     },
     contentBase: [ path.resolve(__dirname, "build"), path.resolve(__dirname, "mock") ], // 静态资源路径，需要配置编译后的模块文件存放的路径（同output中的path），也可以在这里配置其他的，比如mock文件存放的路径
     compress: true, // 是否开启压缩
     historyApiFallback: true, // true for index.html upon 404, object for multiple paths
     hot: true, // 是否开启热更新，需要配置HotModuleReplacementPlugin
     https: false, // 是否使用https
     noInfo: true, // 在热更新时，只会输出错误与警告信息，不会输出其他日志
     stats: "verbose" // 输出所有日志
};

var compiler = webpack(webpackConfig);
var webpackDevServer = new WebpackDevServer(compiler, devServerOptions);
webpackDevServer.listen('9090', 'http://localhost', function (err) {
    if (err) {
        console.error(err);
    }
});