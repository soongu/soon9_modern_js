const path = require('path');

module.exports = {
    // entry file
    // https://webpack.js.org/configuration/entry-context/#entry
    entry: './src/js/main.js',
    // 번들링된 js 파일의 이름과 저장경로를 지정
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    // https://webpack.js.org/configuration/module
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src/js')
                ],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devtool: 'source-map',
    mode: 'development'
}