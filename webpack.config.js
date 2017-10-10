var config = {
   entry: './main.js', // entry point
   output: {
         filename: 'index.js', // place where bundled app will be served
      },
   devServer: {
         inline: true, // autorefresh
         port: 8080, // development port server
         historyApiFallback: true
      },
   module: {
         loaders: [
            {
               test: /\.jsx?$/, // search for js files 
               exclude: /node_modules/,
               loader: 'babel-loader',
   query: {
               presets: ['es2015', 'react'] // use es2015 and react
            }
         },
         // handle stylesheets required from node packages
    { test: /\.css$/, loader: 'style-loader!css-loader'},
    {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'file-loader',
    },
    {
      test : /\.jpg$/,
      exclude: /(node_modules)/,
      loader : 'file-loader'
    }  ]
   }
}
module.exports = config;