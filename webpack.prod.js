const merge = require("webpack-merge");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",

    output: {
        filename: "[name].js",
        chunkFilename: "[id].js"
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),

            new MiniCssExtractPlugin({
                filename: "../css/[name].css",
                chunkFilename: "../css/[id].css"
            }),

            new OptimizeCSSAssetsPlugin({})
        ]
    }
});
