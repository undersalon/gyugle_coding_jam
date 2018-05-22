const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['react']
					}
				}
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	devServer: {
		contentBase: path.resolve(__dirname),
		compress: true,
		inline: true,
		hot: true,
		historyApiFallback: true,
		port: 9000
	}
};
