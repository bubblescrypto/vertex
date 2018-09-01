const webpack = require('webpack')

module.exports = {
    devServer: {
        contentBase: './dist'
    },
    entry: './client/index.js',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /.jsx?/,
                use: ['babel-loader']
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
}