const axios = require('axios')
const { secret } = require('./auth-jwt.json')
const { isDevEnviroment } = require('./utils')
require('dotenv/config')

const baseURL = isDevEnviroment() ? `http://${process.env.API_GATEWAY_HOST}`: 
  `https://${process.env.API_GATEWAY_HOST}`

const api = axios.create({ baseURL })
api.interceptors.request.use(async config => {

  const headers = { ...config.headers }

  if (secret) {
    headers.Authorization = secret
  }

  return { ...config, headers }
})

module.exports =  api