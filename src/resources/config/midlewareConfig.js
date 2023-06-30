const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const Admin = require("../model/admin");
const Category = require("../model/categories");
const Product = require("../model/products");
function setupMidleware(app) {
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(cookieParser());

  let clientURLs = [
    "/",
    /^\/san-pham\/.*/,
    /^\/lien-he\/.*/,
    /^\/dich-vu\/.*/,
    /^\/bao-gia\/.*/,
    /^\/gioi-thieu\/.*/,
  ];

  app.use(clientURLs, setupDataClient);
}

async function setupDataClient(req, res, next) {
  let admin = {};
  let categories = [];
  try {
    await Admin.findOne({ where: { id: 1 } }).then((item) => {
      admin = {
        id: item.id,
        name: item.name,
        email: item.email,
        address: item.address,
        phoneNumber: item.phoneNumber,
        website: item.website,
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
          seo_title: item.seo_title,
          seo_description: item.seo_description,
          seo_keywords: item.seo_keywords,
        };
        categories.push(category);
      });
    });

    let categoryAPI = [];

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
    res.locals.admin = admin;
    res.locals.categories = categories;
    res.locals.categoryAPI = categoryAPI;
  } catch (error) {
    console.error(error);
  }
  next();
}
module.exports = setupMidleware;
