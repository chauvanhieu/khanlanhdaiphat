const About = require("../../model/about");

class AdminAboutController {
  async index(req, res) {
    const post = await About.findOne({ where: { id: 1 } });

    console.log(post.dataValues);

    res.render("adminTemplate/about", { about: post.dataValues });
  }

  handlePost(req, res) {
    res.render("adminTemplate/about");
  }
}

module.exports = new AdminAboutController();
