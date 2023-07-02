const express = require("express");
const router = express.Router();

const adminCategoryController = require("../../controller/admin/categoryController");

router.get("/", adminCategoryController.index);

module.exports = router;
