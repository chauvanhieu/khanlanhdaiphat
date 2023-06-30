const Service = require("../../model/services");

class AdminServiceController {
  async index(req, res) {
    const post = await Service.findOne({ where: { id: 1 } });
    res.render("adminTemplate/service", { service: post.dataValues });
  }

  async handlePost(req, res) {
    const { content, seo_title, seo_keywords, seo_description } = req.body;
    let service = await Service.findByPk(1);
    service.content = content;
    service.seo_title = seo_title;
    service.seo_keywords = seo_keywords;
    service.seo_description = seo_description;
    service.save();
    res.redirect("/admin/dich-vu");
  }
}

module.exports = new AdminServiceController();
