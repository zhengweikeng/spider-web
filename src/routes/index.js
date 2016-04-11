const router = require('koa-router')()

router.get('/', (ctx, next) => {
  ctx.body = 'hello world!'
})

module.exports = (app) => {
  app.use(router.routes())
}