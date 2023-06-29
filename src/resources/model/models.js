const sequelize = require("../config/sequelize-instance");
const About = require("./about");
const Admin = require("./admin");
const Category = require("./categories");
const Customer = require("./customers");
const Order = require("./orders");
const Product = require("./products");
const Promotion = require("./promotion");
const Service = require("./services");

const models = {
  About,
  Admin,
  Category,
  Customer,
  Order,
  Product,
  Promotion,
  Service,
};

Object.values(models).forEach((model) => {
  model.init(sequelize);
});

Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

module.exports = models;
