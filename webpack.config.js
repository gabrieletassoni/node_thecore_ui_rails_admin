const path = require('path');

module.exports = {
    entry: './src/index.js',
    resolve: {
        alias: {
            jquery: "jquery/src/jquery",
            $: 'jquery/src/jquery',
            jQuery: 'jquery/src/jquery'
        }
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'production',
    module: {
        rules: [
            // CSS
            {
                test: /\.css$/i,
                use: [
                    'style-loader', 
                    'css-loader'
                ],
            },
            // SASS
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            // IMAGES
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            // FONTS
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
};