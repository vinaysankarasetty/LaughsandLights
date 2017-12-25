var path = require('path');
var config = {
    entry: './main.js', // entry point
    output: {
        filename: 'index.js', // place where bundled app will be served
    },
    resolve: {
      alias: {
  staticData: path.resolve(__dirname, './app/src/data/static/')
}
},
    devServer: {
        host: '0.0.0.0',
        inline: true, // autorefresh
        port: 443, // development port server
        historyApiFallback: true,
        disableHostCheck: true
    },
    module: {
        loaders: [{
                test: /\.(js|jsx)?$/, // search for js files 
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'], // use es2015 and react
                    plugins: ['transform-decorators-legacy']
                }
            },
            // handle stylesheets required from node packages
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
            },
            {
                test: /\.(jpg|ico)$/,
                exclude: /(node_modules)/,
                loader: 'file-loader'
            },
            {
        test: /\.json$/,
        loader: 'json-loader'
      }
        ]
    }
}
console.log("path : "+config.resolve.alias.staticData);
module.exports = config;