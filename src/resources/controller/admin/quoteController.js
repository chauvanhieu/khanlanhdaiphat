class AdminQuoteController {
  index(req, res) {
    res.render("adminTemplate/quote");
  }

  handlePost(req, res) {
    res.render("adminTemplate/quote");
  }
}

module.exports = new AdminQuoteController();
