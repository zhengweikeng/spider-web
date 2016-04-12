const request = require('superagent')
const server = require('../../config/server')

const baiduApiKey = server.apikey.baidu
const wechatUrl = server.url.wechat

const findHotsDefault = (num=10, rand=0, word='', page=1, src='') => {
  let query = {num, rand, page}
  if (word) {
    query.word = word
  }
  if (src) {
    query.src = src
  }
  return new Promise((resolve, reject) => {
    request
    .get(wechatUrl.hots_public)
    .set('apikey', baiduApiKey)
    .query(query)
    .end((err, res) => {
      const result = res.text ? JSON.parse(res.text) : {}
      if (err || result.code !== 200) {
        return reject(err || result)
      }     
      resolve(result)
    })
  })
}

exports.findHotsByParams = (params={}) => {
  const {num, rand, word, page, src} = params 
  return findHotsDefault(num, rand, word, page, src)
}

exports.findHots = () => {
  return findHotsDefault() 
}