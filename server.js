const express = require("express");
const app = express();
const sequelize = require("./src/resources/config/sequelize-instance");

require("express-async-errors");

const port = 8080;

const setupJWT = require("./src/resources/config/loginJWT");
const midlewareConfig = require("./src/resources/config/midlewareConfig");
const viewEngineConfig = require("./src/resources/config/viewEngineConfig");
const initRouter = require("./src/resources/router/indexRouter");
const uploadConfig = require("./src/resources/config/uploadConfig");

midlewareConfig(app);
viewEngineConfig(app);
setupJWT(app);
uploadConfig(app);

initRouter(app);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server started on ${port}`);
  });
});
