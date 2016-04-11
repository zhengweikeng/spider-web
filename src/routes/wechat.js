const hotPublic = require('../lib/wechat/hot-public')
const Router = require('koa-router')
const router = new Router({
  prefix: '/wechat'
})

router.get('/', (ctx) => {
  ctx.body = 'wechat'
})

router.get('/hots', (ctx) => {
  const res = hotPublic.findHots()
  ctx.body = res
})

module.exports = () => {
  return router.routes()
}