const { createInMemoryHistory } = require('@dashbling/core/history');
const path = require('path');
const moment = require('moment');
const refreshDatas1m = require('./jobs/refreshDatas1m');

module.exports = {
  webpackConfig: config => {

    // On surcharge la config pour éviter les problèmes de path de Dashbling...
    const exclude = modulePath => {
      return (
        /node_modules/.test(modulePath) &&
        !/node_modules.@dashbling/.test(modulePath) &&
        !/node_modules..*?dashbling-widget.*/.test(modulePath)
      );
    };

    const babelConfigFile = path.join(__dirname, '.babelrc');
    const postcssConfigFile = path.join(__dirname, 'node_modules/@dashbling/build-support/.babelrc');

    config.module.rules = [
      {
        test: /\.jsx?$/,
        exclude: exclude,
        loader: 'babel-loader',
        options: {
          extends: babelConfigFile
        }
      },
      {
        test: /\.s?css$/,
        exclude: exclude,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: postcssConfigFile
              }
            }
          },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        loader: 'file-loader',
        exclude: exclude
      }
    ];

    return config;
  },
  eventHistory: createInMemoryHistory(),
  forceHttps: false,
  /**
   * Configuratiion des jobs
   */
  jobs: [
    {
      // Rechargement des données / 1min
      schedule: '*/1 * * * *',
      fn: refreshDatas1m(),
    }
  ],
};
