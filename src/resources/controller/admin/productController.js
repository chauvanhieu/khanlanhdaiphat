const Product = require("../../model/products");
const Category = require("../../model/categories");
const slugify = require("slugify");
const { Op } = require("sequelize");

function convertToSlug(text) {
  return slugify(text, {
    lower: true, // Chuyển đổi sang chữ thường
    strict: true, // Chỉ giữ các ký tự an toàn trong URL
  });
}

class AdminProductController {
  async index(req, res) {
    let categories = [];
    let products = [];
    const keyword = req.query.keyword;
    const category_id = req.query.danh_muc;
    let where = {};

    await Category.findAll().then((items) => {
      items.forEach((item) => {
        let category = {
          id: item.id,
          name: item.name,
          slug: item.slug,
          status: item.status,
        };
        categories.push(category);
      });
    });

    if (keyword && category_id) {
      // Lọc sản phẩm theo cả từ khóa và category_id
      where = {
        [Op.and]: [
          {
            [Op.or]: [
              {
                name: {
                  [Op.like]: `%${keyword}%`,
                },
              },
              {
                description: {
                  [Op.like]: `%${keyword}%`,
                },
              },
            ],
          },
          {
            category_id: category_id,
          },
        ],
      };
    } else if (keyword) {
      // Lọc sản phẩm theo từ khóa
      where = {
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${keyword}%`,
            },
          },
          {
            description: {
              [Op.like]: `%${keyword}%`,
            },
          },
        ],
      };
    } else if (category_id) {
      where = {
        category_id: category_id,
      };
    }

    await Product.findAll({
      where: where,
      include: Category,
      order: [["id", "DESC"]],
    }).then((items) => {
      items.forEach((item) => {
        let i = {
          id: item.id,
          name: item.name,
          image: item.image,
          category_id: item.category_id,
          infomation: item.infomation,
          description: item.description,
          slug: item.slug,
          status: item.status,
          seo_title: item.seo_title,
          seo_keywords: item.seo_keywords,
          seo_description: item.seo_description,
        };
        products.push(i);
      });
    });

    res.render("adminTemplate/products", {
      categories,
      products,
    });
  }

  async getOne(req, res) {
    let categories = [];

    await Category.findAll({ where: { status: 1 } }).then((items) => {
      items.forEach((item) => {
        let category = {
          id: item.id,
          name: item.name,
          slug: item.slug,
          status: item.status,
        };
        categories.push(category);
      });
    });

    const product = await Product.findOne({ where: { slug: req.params.slug } });

    let HTMLcategories = "";
    categories.forEach((item) => {
      if (item.id == product.dataValues.category_id) {
        HTMLcategories += `<option value="${item.id}" selected>${item.name}</option>`;
      } else {
        HTMLcategories += `<option value="${item.id}" >${item.name}</option>`;
      }
    });

    res.render("adminTemplate/single-product", {
      categories: HTMLcategories,
      product: product.dataValues,
      category_id: product.dataValues.category_id,
    });
  }

  async create(req, res) {
    let categories = [];

    await Category.findAll({ where: { status: 1 } }).then((items) => {
      items.forEach((item) => {
        let category = {
          id: item.id,
          name: item.name,
          slug: item.slug,
          status: item.status,
        };
        categories.push(category);
      });
    });

    res.render("adminTemplate/create-product", {
      categories,
    });
  }

  async update(req, res) {
    const {
      id,
      name,
      category_id,
      infomation,
      description,
      status,
      seo_title,
      seo_description,
      seo_keywords,
      old_image,
    } = req.body;
    let img = "";
    if (req.file) {
      img = "/images/" + req.file.filename;
    } else {
      img = old_image;
    }

    await Product.update(
      {
        id,
        name,
        image: img,
        category_id,
        infomation,
        description,
        slug: convertToSlug(name),
        status,
        seo_title,
        seo_description,
        seo_keywords,
      },
      { where: { id: id } }
    ).catch((err) => {
      console.error(err);
    });

    res.redirect("/admin/san-pham");
  }

  async handleCreate(req, res) {
    const {
      name,
      category_id,
      infomation,
      description,
      seo_title,
      seo_description,
      seo_keywords,
    } = req.body;
    let img = "";
    if (req.file) {
      img = "/images/" + req.file.filename;
    } else {
      img = "null";
    }

    await Product.create({
      name,
      image: img,
      category_id,
      infomation,
      description,
      slug: convertToSlug(name),
      status: 1,
      seo_title,
      seo_description,
      seo_keywords,
    }).catch((err) => {
      console.error(err);
    });

    res.redirect("/admin/san-pham");
  }
}

module.exports = new AdminProductController();
