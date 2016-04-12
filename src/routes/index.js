const router = require('koa-router')()
const wechat_router = require('./wechat')
const news_router = require('./news')

router.get('/', (ctx, next) => {
  ctx.body = 'hello world!'
})

module.exports = (app) => {
  app.use(router.routes())
  
  // 微信路由
  app.use(wechat_router())
  app.use(news_router())
}