const Koa = require('koa')
const appConfig = require('./config/server.js').app
const error = require('koa-error')
const bodyParser = require('koa-bodyparser')
const cors = require('koa-cors')
const routes = require('./routes/index')
const app = new Koa()

app.use(error())
// app.use(cors())
app.use(bodyParser())

routes(app)

app.listen(appConfig.port)
console.log(`server is started in port: ${appConfig.port}`)