/** @format */

const About = require("../../model/about");

class AdminAboutController {
  async index(req, res) {
    const post = await About.findOne({ where: { id: 1 } });

    console.log(post.dataValues);

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
      console.log(content);
      // Cập nhật thông tin "About" trong cơ sở dữ liệu
      await About.update(
        { content, seo_title, seo_keywords, seo_description },
        { where: { id: 1 } }
      );

      // Điều hướng người dùng đến trang "About" sau khi cập nhật thành công
      console.log("Updated");
      res.redirect("/admin/gioi-thieu");
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error("Lỗi khi cập nhật thông tin About:", error);
      // Điều hướng người dùng đến trang lỗi hoặc hiển thị thông báo lỗi
      res.redirect("/admin/error");
    }
  }
}

module.exports = new AdminAboutController();
