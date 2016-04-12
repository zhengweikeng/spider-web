const request = require('superagent')
const server = require('../../config/server')
const baiduApiKey = server.apikey.baidu
const techUrl = server.url.news.tech

exports.findTechNews = (num=10, page=1) => {
  return new Promise((resolve, reject) => {
    request
    .get(techUrl)
    .set('apikey', baiduApiKey)
    .query({num, page})
    .end((err, res) => {
      const result = res.text ? JSON.parse(res.text) : {}
      if (err || result.code !== 200) {
        return reject(err || result)
      }     
      resolve(result)
    })
  })
} 