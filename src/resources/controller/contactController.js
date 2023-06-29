/** @format */

class ServiceController {
  // [GET] /gioi-thieu
  index(req, res) {
    res.render("clientTemplate/contact");
  }
}

module.exports = new ServiceController();
