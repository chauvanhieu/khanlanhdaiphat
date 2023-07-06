const About = require("../../model/about");

class AdminAboutController {
  async index(req, res) {
    const post = await About.findOne({ where: { id: 1 } }).catch((err) => {
      res.redirect("/admin");
    });

    res.render("adminTemplate/about", {
      about: post.dataValues,
      title: post.dataValues.seo_title,
      keywords: post.dataValues.seo_keywords,
      description: post.dataValues.seo_description,
    });
  }

  async updateAbout(req, res) {
    try {
      const { content, seo_title, seo_keywords, seo_description } = req.body;
      await About.update(
        { content, seo_title, seo_keywords, seo_description },
        { where: { id: 1 }, order: [["id", "DESC"]] }
      );

      res.redirect("/admin/gioi-thieu");
    } catch (error) {
      console.error("Lỗi khi cập nhật thông tin About:", error);
      res.redirect("/admin/error");
    }
  }
}

module.exports = new AdminAboutController();
