class AdminAboutController {
  index(req, res) {
    res.render("adminTemplate/about");
  }

  handlePost(req, res) {
    res.render("adminTemplate/about");
  }
}

module.exports = new AdminAboutController();
