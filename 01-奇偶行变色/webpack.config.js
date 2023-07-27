const path = require('path');
//1.导入CleanWebpack插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//2.创建CleanWebpack对象
const cleanWebpackPlugin = new CleanWebpackPlugin();

//1.导入HTML插件
const HtmlPlugin = require('html-webpack-plugin');
//2.创建HTML对象
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html', //指定源文件的位置
    filename: './index.html' //指定目标文件的位置
});
//3.通过plugins节点，使新建的实例生效
module.exports = {
    devtool:'nosources-source-map',
    entry: path.join(__dirname, './src/index1.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/main1.js'
    },
    mode: 'development', //用于指定构建模式，可选值：development、production
    plugins: [htmlPlugin, cleanWebpackPlugin],//加载并调用插件
    devServer: {
        open: true,
        port: 8081,
        host: '127.0.0.1'
    },
    module: {//所有使用第三方文件模块的匹配规则
        rules: [ //文件后缀名匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.jpg|png|gif$/, use: 'url-loader?limit=889&outputPath=images' },
            { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ }//注意必须排除node_modules目录。
        ]
    },
}