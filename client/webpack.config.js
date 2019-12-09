const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = (env = {}) => {
  const { mode = 'development' } = env
  const isProd = mode === 'production'

  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public/index.html')
      })
    ]
    if (isProd) {
      plugins.push(new MiniCssExtractPlugin({
        filename: 'main-[hash:8].css'
      }))
    }
    return plugins
  }

  const getStyleLoaders = () => {
    return [
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader'
    ]
  }
  return {
    mode: mode,
    entry: path.join(__dirname, 'src/index.tsx'),

    output: {
      path: path.join(__dirname, 'dist'),
      filename: isProd ? 'main-[hash:8].js' : 'main.js'
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },

    module: {
      rules: [
        {
          test: /\.ts|tsx$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'ts-loader']
        },
        //  Loading SCSS/SASS
        {
          test: /\.(s[ca]ss)$/,
          use: [...getStyleLoaders(), 'sass-loader']
        },
        //  Loading CSS
        {
          test: /\.(css)$/,
          use: getStyleLoaders()
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          loader: 'file-loader',
          include: [/fonts/],
        }
      ]
    },

    plugins: getPlugins(),

    devServer: {
      open: true
    }
  }
};