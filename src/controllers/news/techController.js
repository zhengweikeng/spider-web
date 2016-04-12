const tech = require('../../lib/news/tech')

exports.findTechNews = (ctx) => {
  const {num, page} =  ctx.query
  return tech
  .findTechNews(num, page)
  .then((res) => {
    ctx.type = 'application/json;charset=utf8'
    ctx.body = {
      code: res.code,
      data: res.newslist
    }
  })
  .catch((err) => ctx.body = err)
}