const express = require("express");
const router = express.Router();

const adminCategoryController = require("../../controller/admin/categoryController");

router.get("/", adminCategoryController.index);
router.post("/", adminCategoryController.create);
router.post("/update", adminCategoryController.update);
router.post("/updateStatus", adminCategoryController.updateStatus);

module.exports = router;
