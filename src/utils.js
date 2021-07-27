module.exports = {
  isDevEnviroment() {
    return process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined
  },
  generateBaseURL (){
    const isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined
    return isDev ? `http://${process.env.HOST}:${process.env.PORT}`
      : `https://${process.env.HOST}`
  },
}