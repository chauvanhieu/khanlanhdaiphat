const { Op } = require("sequelize");
const Product = require("../model/products");
const Category = require("../model/categories");
const Admin = require("../model/admin");

const SEO_KEYWORDS =
  "khăn lạnh đại phát giá rẻ, khăn lạnh Đại Phát, khăn ướt để lau, khăn ướt bmt, cồn lạnh, bao tăm bao đũa bmt";
const SEO_DESCRIPTION =
  "cơ sở sản xuất khăn lạnh Đại Phát xin giới thiệu đến quý khách hàng các sản phẩm độc đáo và chất lượng cao, mời quý khách xem qua sản phẩm và liên hệ đặt hàng. Chúng tôi luôn hổ trợ nhiệt tình và tặng kèm nhiều gói dịch vụ hấp dẫn";

class ProductController {
  async index(req, res) {
    const keyword = req.query.keyword;
    const category_id = req.query.danh_muc;
    let where = {};

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

    try {
      let data = [];
      const products = await Product.findAll({
        where: where,
        include: Category,
      }).then((items) => {
        if (items.length) {
          items.forEach((item) => {
            let p = {
              id: item.id,
              name: item.name,
              image: item.image,
              category_id: item.category_id,
              infomation: item.infomation,
              description: item.description,
              slug: item.slug,
              seo_title: item.seo_title,
              seo_keywords: item.seo_keywords,
              seo_description: item.seo_description,
            };

            data.push(p);
          });
        }
      });

      res.render("clientTemplate/products", {
        title: "Tất cả sản phẩm",
        keyword: keyword,
        keywords: SEO_KEYWORDS,
        description: SEO_DESCRIPTION,
        danh_muc: category_id,
        products: data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Đã xảy ra lỗi");
    }
  }

  async showOne(req, res) {
    const slug = req.params.slug;
    let category_id;
    await Product.findOne({ where: { slug } })
      .then((product) => {
        category_id = product.dataValues.category_id;
        res.locals.product = product.dataValues;
        res.locals.title = product.dataValues.seo_title;
        res.locals.keywords = product.dataValues.seo_keywords;
        res.locals.description = product.dataValues.seo_description;
      })
      .catch((err) => {
        console.error(err);
        return res.redirect("/");
      });

    let moreProducts = [];

    await Product.findAll({ where: { category_id } }).then((products) => {
      if (products && products.length > 0) {
        products.forEach((p) => {
          let item = {
            id: p.id,
            name: p.name,
            image: p.image,
            category_id: p.category_id,
            infomation: p.infomation,
            description: p.description,
            slug: p.slug,
            seo_title: p.seo_title,
            seo_keywords: p.seo_keywords,
            seo_description: p.seo_description,
          };
          moreProducts.push(item);
        });
      }
      res.render("clientTemplate/single-product", {
        moreProducts,
      });
    });
  }
}

module.exports = new ProductController();
