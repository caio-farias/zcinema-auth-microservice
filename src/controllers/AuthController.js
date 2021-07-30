const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { secret } = require('../auth-jwt.json')
const api = require('../axios')

module.exports= {
  async authenticate(req, res){
    const { user, passwordTry } = req.body
    try {
      const { id, password } = user
      if(!id)
        return res.status(400).json({ message: "Usuário inválido." })
      
      const isSamePassword = await bcrypt.compare(passwordTry, password)
      if(!isSamePassword)
        return res.status(400).json({ message: "Senha incorreta, tente novamente." })
      
      const token = jwt.sign({ id: id }, secret, {
        expiresIn: 86400,
      })
      delete user.password
      return res.json({ user, token })
    } catch (error) {
      const { message } = error.response.data
      return res.status(400).json({ message })
    }
  },
  async checkTokenPermission(req, res){
    const { token, id } = req.body
    console.log(token, id)
    if(!token)
      return res.status(401).send({ message: "Token não informado."})
    
    jwt.verify(token, secret, (err, decoded) => {
      if(err)
        return res.status(401).send({ message: "Token inválido"})
      
      const decodedId = decoded.id
      return res.status(200).send({ 
        permission: decodedId == id ? 'ACCEPTED' : 'DENIED', 
      })
    })
  },
}
