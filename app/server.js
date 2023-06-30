const express = require("express");
const app = express();
const sequelize = require("./src/resources/config/sequelize-instance");

require("express-async-errors");

const port = 8080;

const uploadConfig = require("./src/resources/config/uploadConfig");
const midlewareConfig = require("./src/resources/config/midlewareConfig");
const viewEngineConfig = require("./src/resources/config/viewEngineConfig");
const initRouter = require("./src/resources/router/indexRouter");

uploadConfig(app);
midlewareConfig(app);
viewEngineConfig(app);

initRouter(app);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server started on ${port}`);
  });
});
