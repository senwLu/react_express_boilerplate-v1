const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'development',
	entry: './client/src/index.jsx',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'client', 'dist')

	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './client/src/index.html',
			filename: './index.html'
		})
	]
};