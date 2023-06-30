const Quote = require("../../model/quote");

class AdminQuoteController {
  async index(req, res) {
    const post = await Quote.findOne({ where: { id: 1 } });

    res.render("adminTemplate/quote", { quote: post.dataValues });
  }

  handlePost(req, res) {
    res.redirect("/admin/bang-bao-gia");
  }
}

module.exports = new AdminQuoteController();
