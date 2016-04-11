const apikey = require('./apikey')
const url = require('./url')

module.exports = {
  app: {
    port: process.env.port || 3000,
    env: process.env.NODE_ENV || 'development'
  },
  apikey: {
    baidu: apikey.baidu
  },
  url: url 
}