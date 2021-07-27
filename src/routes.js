const express = require('express')
const AuthController = require('./controllers/AuthController')
const MicroserviceAuthMiddleware = require('./middlewares/MicroserviceAuth')
const routes = express.Router()

routes.post('/auth', AuthController.authenticate)
routes.post('/permission', MicroserviceAuthMiddleware, AuthController.checkTokenPermission)

module.exports = routes