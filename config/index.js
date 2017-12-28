var path = require('path')

module.exports = {
  // Webpack aliases
  aliases: {
    quasar: path.resolve(__dirname, '../node_modules/quasar-framework/'),
    src: path.resolve(__dirname, '../src'),
    assets: path.resolve(__dirname, '../src/assets'),
    '@': path.resolve(__dirname, '../src/components'),
    store: path.resolve(__dirname, '../src/store'),
    variables: path.resolve(__dirname, '../src/themes/quasar.variables.styl')
  },

  // Progress Bar Webpack plugin format
  // https://github.com/clessg/progress-bar-webpack-plugin#options
  progressFormat: ' [:bar] ' + ':percent'.bold + ' (:msg)',

  // Default theme to build with ('ios' or 'mat')
  defaultTheme: 'mat',

  build: {
    env: require('./prod.env'),
    publicPath: '',
    productionSourceMap: false,

    // Remove unused CSS
    // Disable it if it has side-effects for your specific app
    purifyCSS: true
  },
  dev: {
    env: require('./dev.env'),
    cssSourceMap: true,
    // auto open browser or not
    openBrowser: true,
    publicPath: '/',
    port: 8081,

    // If for example you are using Quasar Play
    // to generate a QR code then on each dev (re)compilation
    // you need to avoid clearing out the console, so set this
    // to "false", otherwise you can set it to "true" to always
    // have only the messages regarding your last (re)compilation.
    clearConsoleOnRebuild: false,

    // Proxy your API if using any.
    // Also see /build/script.dev.js and search for "proxy api requests"
    // https://github.com/chimurai/http-proxy-middleware

    // target is the address of those apis
    // pathRewrite means that we use the file under this floder 'http://192.168.1.199/xiaoma/', when use it add prefix 'api/xxx'
    proxyTable: {'/api': {
        target: 'http://192.168.1.199/xiaoma',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}

/*
 * proxyTable example:
 *
   proxyTable: {
      // proxy all requests starting with /api
      
    }
 */
