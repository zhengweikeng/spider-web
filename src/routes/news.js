const Router = require('koa-router')
const techController = require('../controllers/news/techController')

const prefix = '/news'
const router = new Router({prefix})

router.get('/tech', techController.findTechNews)

module.exports = () => router.routes()