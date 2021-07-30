const express = require('express')
const AuthController = require('./controllers/AuthController')
const MicserviceAuthMiddleware = require('./middlewares/MicserviceAuth')
const routes = express.Router()

routes.post('/auth', AuthController.authenticate)
routes.post('/auth/permission', MicserviceAuthMiddleware, AuthController.checkTokenPermission)

module.exports = routes