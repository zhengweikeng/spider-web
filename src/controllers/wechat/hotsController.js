const hotsPublic = require('../../lib/wechat/hot-public')

exports.getHots = (ctx) => {
  return hotsPublic
  .findHots()
  .then((res) => {
    ctx.type = 'application/json;charset=utf8'
    ctx.body = {
      code: res.code,
      data: res.newslist
    }   
  })
  .catch((err) => ctx.body = err)
} 

exports.getHotsByParams = (ctx) => {
  const num = ctx.query.num
  const rand = ctx.query.rand
  const word = ctx.query.word
  const page = ctx.query.page
  const src = ctx.query.src
  
  return hotsPublic
  .findHotsByParams({num, rand, word, page, src})
  .then((res) => {
    ctx.type = 'application/json;charset=utf8'
    ctx.body = {
      code: res.code,
      data: res.newslist
    }   
  })
  .catch((err) => ctx.body = err)
} 