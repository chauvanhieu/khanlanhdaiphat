const exphbs = require("express-handlebars");
const path = require("path");
const Handlebars = require("handlebars");

function setupViewEngine(app) {
  app.engine(".hbs", exphbs.engine({ extname: ".hbs" }));

  app.set("views", path.join(__dirname, "../views"));

  app.set("view engine", "hbs");

  Handlebars.registerHelper("limitString", function (string, maxLength) {
    if (string.length > maxLength) {
      return string.substring(0, maxLength) + "...";
    } else {
      return string;
    }
  });

  app.use("/", (req, res, next) => {
    res.locals.layout = "mainLayout";
    next();
  });

  app.use("/admin", (req, res, next) => {
    res.locals.layout = "adminLayout";
    next();
  });

  app.use("/dang-nhap", (req, res, next) => {
    res.locals.layout = "loginLayout";
    next();
  });
}
module.exports = setupViewEngine;
