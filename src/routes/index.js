const router = require('koa-router')()
const wechat_router = require('./wechat')

router.get('/', (ctx, next) => {
  ctx.body = 'hello world!'
})

module.exports = (app) => {
  app.use(router.routes())
  
  // 微信路由
  app.use(wechat_router())
}