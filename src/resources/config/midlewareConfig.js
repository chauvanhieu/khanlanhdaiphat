const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const { userInfo } = require("os");

function setupMidleware(app) {
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(cookieParser());
}
module.exports = setupMidleware;
