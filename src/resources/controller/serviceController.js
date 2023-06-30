const Service = require("../model/services");

class ServiceController {
  async index(req, res) {
    const post = await Service.findOne({ where: { id: 1 } });
    res.render("clientTemplate/service", {
      service: post.dataValues,
      title: post.dataValues.seo_title,
      keywords: post.dataValues.seo_keywords,
      description: post.dataValues.seo_description,
    });
  }
}

module.exports = new ServiceController();
