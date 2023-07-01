const express = require("express");
const router = express.Router();

const Admin = require("../../model/admin");
const Category = require("../../model/categories");
const Product = require("../../model/products");

router.get("/", async (req, res) => {
  let admin = {};
  let categories = [];
  let categoryAPI = [];

  try {
    await Admin.findOne({ where: { id: 1 } }).then((item) => {
      admin = {
        id: item.id,
        name: item.name,
        email: item.email,
        address: item.address,
        phoneNumber: item.phoneNumber,
        username: item.username,
        password: item.password,
        seo_title: item.seo_title,
        seo_description: item.seo_description,
        seo_keywords: item.seo_keywords,
        google_map: item.google_map,
        facebook_id: item.facebook_id,
        zalo_phoneNumber: item.zalo_phoneNumber,
        head_script: item.head_script,
      };
    });

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

    if (categories && categories.length) {
      for (let i = 0; i < categories.length; i++) {
        await Product.findAll({
          where: { category_id: categories[i].id, status: 1 },
        }).then((items) => {
          let productArray = [];
          items.forEach((item) => {
            let i = {
              id: 1,
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
            productArray.push(i);
          });
          let category = {
            ...categories[i],
            products: productArray,
            length: productArray.length > 0 ? true : false,
          };
          categoryAPI.push(category);
        });
      }
    }
  } catch (error) {
    console.error(error);
  }

  res.render("clientTemplate/index", {
    admin: admin,
    title: admin.seo_title,
    keywords: admin.seo_keywords,
    description: admin.seo_description,
    categories: categories,
    categoryAPI: categoryAPI,
  });
});

module.exports = router;
