const About = require("../../model/about");

class AdminAboutController {
  async index(req, res) {
    const post = await About.findOne({ where: { id: 1 } });

    res.render("adminTemplate/about", { about: post.dataValues });
  }

  handlePost(req, res) {
    console.log("/ádasd");
    res.render("adminTemplate/about");
  }
}

module.exports = new AdminAboutController();
