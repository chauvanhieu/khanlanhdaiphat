const Category = require("../../model/categories");
const Sequelize = require("sequelize");

class AdminCategoryController {
  async index(req, res) {
    let listCategories = [];

    let keyword = req.query.keyword;

    let whereClause = {};

    if (keyword) {
      whereClause = {
        [Sequelize.Op.or]: [
          {
            name: {
              [Sequelize.Op.like]: `%${keyword}%`,
            },
          }
        ],
      };
    }

    await Category.findAll({
      where: whereClause,
    }).then((items) => {
      items.forEach((item) => {
        listCategories.push({
          id: item.id,
          name: item.name,
          slug: item.slug,
          status: item.status
        });
      });
    });

    res.render("adminTemplate/category", {
      categories: listCategories,
      keyword: keyword,
    });
  }
}
module.exports = new AdminCategoryController();