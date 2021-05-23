// next.config.js
const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript({
  webpack(config, options) {
    return config
  }
})

module.exports =  {
  publicRuntimeConfig: {
    api_key: '985b6732c229227d090a82fbed387761',
    api_uri: 'https://api.themoviedb.org/3'
  }
}