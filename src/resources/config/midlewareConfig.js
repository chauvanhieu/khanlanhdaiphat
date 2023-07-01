const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const Admin = require("../model/admin");
const Category = require("../model/categories");

function setupMidleware(app) {
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(cookieParser());

  let clientURLs = [
    "/dich-vu",
    "/bao-gia",
    "/gioi-thieu",
    "/lien-he",
    "/san-pham",
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

    res.locals.admin = admin;
    res.locals.categories = categories;
  } catch (error) {
    console.error(error);
  }
  next();
}

module.exports = setupMidleware;
