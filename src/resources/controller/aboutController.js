/** @format */

const About = require("../model/about");

class AboutController {
  async index(req, res) {
    const post = await About.findOne({ where: { id: 1 } });

    console.log(post.dataValues);

    res.render("clientTemplate/about", { 
      about: post.dataValues,
      title: post.dataValues.seo_title,
      keywords: post.dataValues.seo_keywords,
      description: post.dataValues.seo_description,
     });
  }
}

module.exports = new AboutController();
