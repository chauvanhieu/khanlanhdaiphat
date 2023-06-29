class ServiceController {
  // [GET] /gioi-thieu
  index(req, res) {
    res.render("clientTemplate/service");
  }
}

module.exports = new ServiceController();
