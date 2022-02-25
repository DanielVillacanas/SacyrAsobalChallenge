//Routes index that reffers to the needed routes folder
module.exports = (app) => {
  app.use('/auth', require('./Auth/auth'))
  app.use('/api', require('./API/api'))
  app.use('/products', require('./Products/products'))
}
