const express = require("express");
const router = express.Router();
const Admin = require("../../model/admin");

router.get("/", async (req, res) => {
  const admin = await Admin.findOne({ where: { id: 1 } });

  res.render("adminTemplate/admin", { admin: admin.dataValues });
});

router.post("/", async (req, res) => {
  const {
    name,
    email,
    phoneNumber,
    address,
    username,
    password,
    facebook_id,
    zalo_phoneNumber,
    seo_title,
    seo_keywords,
    seo_description,
    google_map,
    head_script,
  } = req.body;
  let admin = await Admin.findByPk(1);
  admin.name = name;
  admin.email = email;
  admin.phoneNumber = phoneNumber;
  admin.address = address;
  admin.username = username;
  admin.password = password;
  admin.facebook_id = facebook_id;
  admin.zalo_phoneNumber = zalo_phoneNumber;
  admin.seo_title = seo_title;
  admin.seo_keywords = seo_keywords;
  admin.seo_description = seo_description;
  admin.google_map = google_map;
  admin.head_script = head_script;
  admin.save();
  res.redirect("/admin");
});

module.exports = router;
