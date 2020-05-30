
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {

    entry:{
        main: path.resolve(__dirname,'src/index.tsx')
    },
    output:{
        filename:'[name].[contenthash].js',
        path:path.resolve(__dirname,'dist')
    },
    mode:'development',
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx"]
    },
    devtool:'inline-source-map',
    module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.ts(x?)$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:'ts-loader'
                    }
                ]
            },
            {
                enforce:'pre',
                test:/\.js$/,
                loader:'source-map-loader'
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'React',
            filename:'./index.html',
            template: 'src/template.ejs'
        })
    ]
}