import express from 'express'
import path from 'path'
// import session from 'express-session'
// import cookieParser from 'cookie-parser'
// import bodyParser from 'body-parser'
import { Nuxt, Builder } from 'nuxt'

import api from './api'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

// app.use(cookieParser())
// app.use(
//   session({
//     resave: true, // don't save session if unmodified
//     saveUninitialized: true, // don't create session until something stored
//     secret: 'secret',
//     cookie: {
//       maxAge: 30 * 1000 // 有效期，单位是毫秒
//     }
//   })
// )
// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// )
app.use(express.static(path.join(__dirname, 'public')))

// Import API Routes
app.use('/api', api)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
