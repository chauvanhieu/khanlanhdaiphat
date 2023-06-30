class AdminServiceController {
  index(req, res) {
    res.render("adminTemplate/service");
  }

  handlePost(req, res) {
    res.render("adminTemplate/service");
  }
}

module.exports = new AdminServiceController();
