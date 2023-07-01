const Product = require("../model/products");
const Category = require("../model/categories");

class ProductController {
  async index(req, res) {
    res.render("clientTemplate/products");
  }
}

module.exports = new ProductController();
