//Routes index that reffers to the needed routes folder
module.exports = (app) => {
  app.use("/auth", require("./Auth/auth"));
  app.use("/products", require("./Products/products"));
};
