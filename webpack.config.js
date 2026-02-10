const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Точки входа
    entry: {
        main: './src/js/index.js',
        styles: './src/scss/style.css'
    },

    // Куда положить собранные файлы
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js',
        clean: true
    },

    // Как обрабатывать разные типы файлов
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|webp|ico)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext]'
                }
            }
        ]
    },

    // Плагины
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/img', to: 'img' }
            ],
        }),
    ],

    // Режим разработки
    mode: 'development',

    // DevServer настройки
    devServer: {
        static: './dist',
        port: 9000,
        hot: true,
        open: true
    }
};