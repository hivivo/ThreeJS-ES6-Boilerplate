const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const PUBLIC = __dirname + "/dist"
const TITLE = "Example Title"


const plugins = [
	// environment variables
	new webpack.DefinePlugin({
		__ENV__: JSON.stringify(process.env.NODE_ENV)
	}),
	// create an html page
	new HtmlWebpackPlugin({
		title: TITLE,
		filename: 'index.html',
		template: 'src/index.html'
	}),
	//copy the assets (with no css compilation)
  new CopyWebpackPlugin([
    { from:'src/assets', to:'assets' },
    { from:'src/css', to:'css' }
  ]),
  // clean the output folder
  new CleanWebpackPlugin(['dist']),
]

module.exports = {
	target: 'web',
	devtool: 'source-map',
	entry: './src/js/app.js',
	output: {
		path: PUBLIC,
		filename: 'bundle.js',
		publicPath: ''
	},
	plugins: plugins,
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				include: [
					path.resolve(__dirname, 'src/js')
				],
				loader: 'eslint-loader'
			},
			{
				test: /\.js$/,
				include: [
					path.resolve(__dirname, 'src/js')
				],
				loader: 'babel-loader',
				query: {
					compact: true,
					presets: [
						['env', { modules: false }]
					]
				}
			}
		]
	},
	performance: {
		hints: false
	}
}
