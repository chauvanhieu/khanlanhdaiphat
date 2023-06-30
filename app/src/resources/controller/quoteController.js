class QuoteController {
  index(req, res) {
    res.render("clientTemplate/quote");
  }
}

module.exports = new QuoteController();
