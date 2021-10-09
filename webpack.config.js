const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react',
						],
					},
				},
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    'style-loader',
                    {
                      loader: 'css-loader',
                      options: { importLoaders: 1 }
                    },
                    'sass-loader'
                  ]
            },
            {
				test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|ttf|eot)$/,
				use: {
					loader: 'url-loader',
				},
			},

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
			template: 'public/index.html',
		}),
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx'],
      },
}