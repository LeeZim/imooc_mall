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
        index: './src/pages/index',
        destination: './src/pages/destination'
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
            api: 'src/api',
            icons: 'src/assets/icons',
            styles: 'src/assets/style', 
            components: 'src/components',
            pages: 'src/pages',
            utils: 'src/utils'
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
                test: /\.(eot|tff|woff2?)$/,
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
        }),
        new htmlWebpackPlugin({
            filename: 'destination.html',
            template: './src/pages/destination/destination.art'
        })
    ]
}
