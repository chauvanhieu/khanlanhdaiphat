const Quote = require("../../model/quote");

class AdminQuoteController {
  async index(req, res) {
    const post = await Quote.findOne({ where: { id: 1 } });
    res.render("adminTemplate/quote", { quote: post.dataValues });
  }

  async handlePost(req, res) {
    const { content, seo_title, seo_keywords, seo_description } = req.body;
    let quote = await Quote.findByPk(1);
    quote.content = content;
    quote.seo_title = seo_title;
    quote.seo_keywords = seo_keywords;
    quote.seo_description = seo_description;
    quote.save();
    res.redirect("/admin/bang-bao-gia");
  }
}

module.exports = new AdminQuoteController();
