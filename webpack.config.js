// used as of April 18

var webpack = require('webpack');
var path = require('path');

var config = {
	mode: 'development',
	entry: {
		app : './src/app.jsx'
	},

	output: {
		path: path.join(__dirname, '/public/build'),
		filename : 'bundle.js',
	},

	devtool : '#source-map',

	//tell it how to transpile the code
	module : {
		rules : [
			{
				test : /\.jsx?$/,
				exclude : /(node_modules)/,
				loader : 'babel-loader',
				query : {
					presets : ['react', 'es2015']
				}
			}
		]
	}
};

module.exports = config;
