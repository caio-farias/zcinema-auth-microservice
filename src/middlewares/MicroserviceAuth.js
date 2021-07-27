const bcrypt = require('bcryptjs')
const { secret } = require('../auth-jwt.json')

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization
  if(!authHeader)
    return res.status(401).send({ message: "Token de microsserviços não informado."})
  
  // const token = await bcrypt.hash(secret, 10)
  // const isSameToken = await bcrypt.compare(authHeader, token)
  const isSameToken = secret == authHeader
  if(!isSameToken)
    return res.status(401).send({ message: "Token de microsserviços inválido."})
  
  next()
}