const path = require( 'path' );
const CopyPlugin = require( 'copy-webpack-plugin' );
module.exports = {
  mode: "production",
  entry: {
    background: path.resolve( __dirname, "..", "src", "background.ts" ),
    contentScripts: path.resolve( __dirname, "..", "src", "contentScripts.ts" ),
  },
  output: {
    path: path.join( __dirname, "../dist" ),
    filename: "[name].js",
  },
  resolve: {
    extensions: [ "*", ".ts", ".js", ],
  },
  module: {
    rules: [ {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin( {
      patterns: [ {
        from: ".",
        to: ".",
        context: "public"
      } ]
    } ),
  ],
  optimization: {
    minimize: false
  },
};