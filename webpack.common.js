const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: path.join(__dirname, "src", "js", "index.js")
    },

    output: {
        path: path.join(__dirname, "dist", "js")
    },

    module: {
        rules: [
            {
                test: /\.((png)|(eot)|(woff)|(woff2)|(ttf)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader?name=/[hash].[ext]"
            },

            {
                    test: /\.svg$/,
                    use: [
                      {loader: 'file-loader'},
                      {
                        loader: 'svgo-loader',
                        options: {
                          plugins: [
                            {removeTitle: true},
                            {convertColors: {shorthex: false}},
                            {convertPathData: false}
                          ]
                        }
                      }
                    ]
                  },


            {test: /\.json$/, loader: "json-loader"},

            {
                loader: "babel-loader",
                test: /\.m?js?$/,
                exclude: /node_modules/,
                query: {cacheDirectory: true}
            },

            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
            }
        ]
    },



    plugins: [
        new webpack.ProvidePlugin({
            fetch: "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch"
        })
    ]
};
