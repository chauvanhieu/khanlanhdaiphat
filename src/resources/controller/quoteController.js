const Quote = require("../model/quote");

class QuoteController {
  async index(req, res) {
    const post = await Quote.findOne({ where: { id: 1 } });

    res.render("clientTemplate/quote", {
      quote: post.dataValues,
      keywords: post.dataValues.seo_keywords,
      description: post.dataValues.seo_description,
    });
  }
}

module.exports = new QuoteController();
