class AboutController {
  // [GET] /gioi-thieu
  index(req, res) {
    res.render("clientTemplate/about");
  }
}

module.exports = new AboutController();
