const hotsController = require('../controllers/wechat/hotsController')
const Router = require('koa-router')
const cache = require('koa-cache-lite')
const convert = require('koa-convert')

const prefix = '/wechat'
const cacheTime = 1 * 60 * 60 * 1000
const url = {
  hots: '/hots',
  hotsWithParams: '/hots/params'
} 
const router = new Router({prefix})
const debug = process.env.NODE_ENV === 'production' ? false : true
cache.configure({
  [`${prefix}`]: cacheTime,
  [`${prefix}${url.hots}`]: cacheTime,
  [`${prefix}${url.hotsWithParams}`]: cacheTime
}, {debug})

router.use(convert(cache.middleware()))

router.get('/', (ctx) => {
  ctx.body = 'wechat'
})

router.get(url.hots, hotsController.getHots)
router.get(url.hotsWithParams, hotsController.getHotsByParams)

module.exports = () => {
  return router.routes()
}