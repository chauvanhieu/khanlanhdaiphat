const Category = require("../../model/categories");
const Sequelize = require("sequelize");
const slugify = require("slugify");

function generateSlug(text) {
  return slugify(text, {
    lower: true,
    strict: true,
  });
}

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
          },
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
          status: item.status,
        });
      });
    });

    res.render("adminTemplate/category", {
      categories: listCategories,
      keyword: keyword,
    });
  }

  async create(req, res) {
    const { newCategory } = req.body;
    try {
      await Category.create({
        name: newCategory,
        slug: generateSlug(newCategory),
        status: 1,
      });
      res.redirect("/admin/danh-muc");
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error(error);
      res.render("adminTemplate/danh-muc", {
        error: "Failed to create category",
      });
    }
  }

  async update(req, res) {
    const { id } = req.body;
    const { newCategoryName } = req.body;
    const { newStatus } = req.body;

    try {
      await Category.update(
        {
          name: newCategoryName,
          slug: generateSlug(newCategoryName),
          status: newStatus,
        },
        { where: { id: id } }
      ).catch((error) => {
        return res.redirect("/admin/danh-muc");
      });

      return res.redirect("/admin/danh-muc");
    } catch (error) {
      return res.status(500).json({ error: "Lỗi server" });
    }
  }

  async updateStatus(req, res) {
    const { id } = req.params;
    const { newCategoryStatus } = req.body;

    try {
      await Category.update(
        {
          status: newCategoryStatus,
        },
        { where: { id: id } }
      ).catch((error) => {
        return res.redirect("/admin/danh-muc");
      });

      return res.redirect("/admin/danh-muc");
    } catch (error) {
      return res.status(500).json({ error: "Lỗi server" });
    }
  }
}
module.exports = new AdminCategoryController();
