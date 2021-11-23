// 引入路径模块
const path = require('path') 
// 引入html-webpack-plugin
const htmlWebpackPlugin = require('html-webpack-plugin')

// 获取绝对路径
const resolve = dir => path.resolve(__dirname, dir)

// 导出模块
module.exports = {
    // 模式
    mode: 'development',
    // 入口文件
    entry: {
        index: './src/pages/index/index.js',
        destination: './src/pages/destination/index.js',
        personal: './src/pages/personal/index.js'
    },
    // webpack输出路径
    output: {
        path: resolve('dist'),
        filename: 'js/[name].js'
    },
    // 开发工具 cheap-module-eval-source-map
    devtool: 'cheap-module-eval-source-map',
    // resolve
    resolve: {
        extensions: ['.js'],
        alias: {
            api: resolve('src/api'),
            icons: resolve('src/assets/icons'),
            styles: resolve('src/assets/style'), 
            components: resolve('src/components'),
            pages: resolve('src/pages'),
            utils: resolve('src/utils')
        }
    },
    // 模块
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.art$/,
                loader: 'art-template-loader'
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'images/[name].[ext]',
                    esModule: false
                }
                
            },
            {
                test: /\.(eot|ttf|woff2?)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[ext]'
                }
                
            }
        ]
    },
    // 插件
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/pages/index/index.art'
            ,
            chunks: ['index']
        }),
        new htmlWebpackPlugin({
            filename: 'destination.html',
            template: './src/pages/destination/destination.art',
            chunks: ['destination']
        }),
        new htmlWebpackPlugin({
            filename: 'personal.html',
            template: './src/pages/personal/personal.art',
            chunks: ['personal']
        })
    ]
}
