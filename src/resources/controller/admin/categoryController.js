const Category = require("../../model/categories");
const Sequelize = require("sequelize");

function removeAccent(str) {
  str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  str = str.toLowerCase();
  str = str.trim();
  return str.replace(/[^a-z0-9]+/g, "-");
}

function generateSlug(title) {
  // Loại bỏ các dấu tiếng Việt và chuyển đổi chuỗi thành slug
  const slug = removeAccent(title);
  return slug;
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
      const category = await Category.create({
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
      const category = await Category.findByPk(id);
      if (!category) {
        return res.redirect("/admin/danh-muc");
      }

      category.name = newCategoryName;
      category.slug = generateSlug(newCategoryName);
      category.status = newStatus;

      await category.save();

      return res.redirect("/admin/danh-muc");
    } catch (error) {
      return res.status(500).json({ error: "Lỗi server" });
    }
  }

  async updateStatus(req, res) {
    const { id } = req.params;
    const { newCategoryStatus } = req.body;

    try {
      const category = await Category.findByPk(id);
      if (!category) {
        return res.redirect("/admin/danh-muc");
      }

      category.status = newCategoryStatus;
      await category.save();

      return res.redirect("/admin/danh-muc");
    } catch (error) {
      return res.status(500).json({ error: "Lỗi server" });
    }
  }
}
module.exports = new AdminCategoryController();