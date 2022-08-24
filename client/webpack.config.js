const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // takes html template and outputs an HTML file with appropriate asset links
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Text Me Maybe'
      }),
      // creates the PWA manifest
      new WebpackPwaManifest({
        name: 'Text Me Maybe',
        short_name: 'TextMe',
        description: 'A wonderful text editor',
        background_color: '#242520',
        fingerprints: false,
        inject: true,
        start_url: './',
        publicPath: './',
        icons: [
          {
            src: path.resolve('src/images/tmm_transparent.png'),
            sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
            destination: path.join('assets', 'icons'),
            purpose: 'any'
          },
          {
            src: path.resolve('src/images/tmm_bg.png'),
            sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
            destination: path.join('assets', 'icons'),
            purpose: 'maskable'
          },
        ]
      }),
      // Creates the service worker based on the src
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'service-worker.js',
      }),
      // new MiniCssExtractPlugin()
    ],

    module: {
      rules: [
        // creates CSS bundle
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        // creates images
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        // creates js bundles
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/transform-runtime',
              ],
            },
          },
        },
      ],
    },
  };
};
