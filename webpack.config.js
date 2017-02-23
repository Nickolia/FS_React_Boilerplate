var webpack = require('webpack');
var path = require('path');

var SRC_FOLDER_NAME = 'app';
var PUBLIC_FOLDER_NAME = 'dist';
var DEVUI_SRC_FOLDER_NAME = 'devui';
var resolve = function (name) {
    return path.join(__dirname, name)
};
var INCLUDE_PATCH = resolve(SRC_FOLDER_NAME);

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, 'app/main.jsx')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css?modules',
                include: /flexboxgrid/,
            },
            {
                test: /\.css$/,
                include: INCLUDE_PATCH,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(jpg|png|mp3|ogg|ttf|otf|json)$/,
                loader: 'file',
                include: INCLUDE_PATCH,
                query: {
                    name: '[name]--[sha512:hash:10].[ext]',
                },
            },
            {
                test: /\.js[x]?$/, include: INCLUDE_PATCH, exclude: /node_modules/, loaders: ['babel-loader', 'eslint-loader'],
            },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            flexboxgrid: path.join(__dirname, '/node_modules/flexboxgrid/dist/flexboxgrid.css'),
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ]
};
