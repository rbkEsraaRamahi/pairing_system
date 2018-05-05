const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 8080;
const sourcePath = path.join(__dirname, './client');
const buildDirectory = path.join(__dirname, './build');
const flexPath = path.join(__dirname, './node_modules/flexboxgrid');

const stats = {
  assets: true,
  children: false,
  chunks: false,
  hash: false,
  modules: false,
  publicPath: false,
  timings: true,
  version: false,
  warnings: true,
  colors: {
    green: '\u001b[32m',
  },
};

module.exports = function(env) {
  const nodeEnv = env && env.prod ? 'production' : 'development';
  const isProd = nodeEnv === 'production';

  const serviceWorkerBuild = env && env.sw;

  let cssLoader;

  const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
      async: true,
      children: true,
      minChunks: 2,
    }),

    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) },
    }),

    new ExtractTextPlugin('style-[contenthash:8].css'),
     new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    new HtmlWebpackPlugin({
      template: './index.ejs',
      inject: true,
      production: isProd,
      minify: isProd && {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),

    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
    }),

    new PreloadWebpackPlugin(),
  ];

  if (isProd) {

    plugins.push(
      new UglifyJSPlugin({
        compress: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
        },
      })
    );

    cssLoader = ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            module: true,
            modules: true,
            localIdentName: '[local]',
            includePaths: [flexPath]
          },
        },
        {
          loader: 'sass-loader',
          options: {
            outputStyle: 'collapsed',
            sourceMap: true,
            includePaths: [sourcePath, flexPath],
          },
        },
      ],
    });
  } else {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    );

    cssLoader = [
      {
        loader: 'style-loader',
        options: {
          includePaths: [flexPath]
        }
      },
      {
        loader: 'css-loader',
        options: {
          module: true,
          localIdentName: '[local]',
          includePaths: [flexPath]
        },
      },
      {
        loader: 'sass-loader',
        options: {
          outputStyle: 'expanded',
          sourceMap: false,
          includePaths: [sourcePath, flexPath],
        },
      },
    ];
  }

  if (serviceWorkerBuild) {
    plugins.push(
      new SWPrecacheWebpackPlugin({
        cacheId: 'salalem-cms-admin-app',
        filename: 'sw.js',
        maximumFileSizeToCacheInBytes: 800000,
        mergeStaticsConfig: true,
        minify: true,
        runtimeCaching: [
          {
            handler: 'cacheFirst',
            urlPattern: /(.*?)/,
          },
        ],
      })
    );
  }

  const entryPoint = isProd
    ? './index.js'
    : [
        // activate HMR for React
        'react-hot-loader/patch',

        `webpack-dev-server/client?http://${host}:${port}`,

        'webpack/hot/only-dev-server',

        './index.js',
      ];

  return {
    devtool: isProd ? 'source-map' : 'cheap-module-source-map',
    context: sourcePath,
    entry: {
      main: entryPoint,
    },
    output: {
      path: buildDirectory,
      publicPath: '/',
      filename: '[name]-[hash:8].js',
      chunkFilename: '[name]-[chunkhash:8].js',
    },
    module: {
      rules: [
        {
          test: /\.(html|svg|jpe?g|png|ttf|woff2?)$/,
          exclude: /node_modules/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'static/[name]-[hash:8].[ext]',
            },
          },
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: cssLoader,
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader','css-loader'],
          include: /flexboxgrid/
        }
      ],
    },
    resolve: {
      extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
      modules: [path.resolve(__dirname, 'node_modules'), sourcePath],
    },


    plugins,

    performance: isProd && {
      maxAssetSize: 300000,
      maxEntrypointSize: 300000,
      hints: 'warning',
    },

    stats: stats,

    devServer: {
      contentBase: './client',
      publicPath: '/',
      historyApiFallback: true,
      port: port,
      host: host,
      hot: !isProd,
      compress: isProd,
      stats: stats,
    },
  };
};