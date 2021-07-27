const axios = require('axios')
const bcrypt = require('bcryptjs')
const { secret } = require('./auth-jwt.json')
const { isDevEnviroment } = require('./utils')
require('dotenv/config')

const baseURL = isDevEnviroment() ? `http://localhost:${process.env.PORT}`: 
  `https://${process.env.USER_M_HOST}`
const api = axios.create({ baseURL })

api.interceptors.request.use(async config => {
  // const token = await bcrypt.hash(secret, 10)

  const headers = { ...config.headers }

  if (secret) {
    headers.Authorization = secret
  }

  return { ...config, headers }
})

module.exports =  api