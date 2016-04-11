const request = require('superagent')
const server = require('../../config/server')

const baiduApiKey = server.apikey.baidu
const wechatUrl = server.wechat

exports.findHots = () => {
  request
  .get(wechatUrl.hots_public)
  .set('apikey', baiduApiKey)
  .query({
    num: 10
  })
  
  return 'hots!!!!'
}