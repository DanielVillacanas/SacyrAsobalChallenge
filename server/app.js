// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

const express = require("express");

const app = express();

require("./config")(app);
require("./config/session.config")(app);
require("./routes/index.routes")(app);
require("./error-handling")(app);

module.exports = app;
