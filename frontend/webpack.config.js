'use strict';

const APP_NAME = process.env.APP_NAME;

var webpack = require('webpack');
var path = require('path');

var env = process.env.MIX_ENV || 'dev';
var isProduction = (env === 'prod');

const Dotenv = require('dotenv-webpack');

module.exports = {
    devtool: 'source-map',
    entry: __dirname + "/src/index.jsx",
    output: {
        path: __dirname + "/static/js",
    	filename: "app.js"
    },
    
    resolve: {
	    extensions: [".js", ".jsx"]
    },
    
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [ /node_modules/, /__tests__/ ],
                loader: 'babel-loader',
            },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.(png|gif|jpg)$/, loader: 'file-loader' },
            { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'null-loader' },
            { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'null-loader' },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'null-loader' },
            { test: /\.css$/, loaders: 'style-loader!css-loader' },
            { test: /\.s(a|c)ss$/, loaders: 'style-loader!css-loader!sass-loader' },
        ],
	
    //	resolve: {
    //	    modulesDirectories: [ "node_modules", __dirname + "/web/static/js" ]
    //	}
    },

    plugins: [
     /*   new webpack.optimize.DedupePlugin(), */
        new Dotenv()
    ]
}
