const express = require("express");
const router = express.Router();
const upload = require("../../config/multer");
const adminProductController = require("../../controller/admin/productController.js");

router.get("/create", adminProductController.create);

router.post(
  "/create",
  upload.single("image"),
  adminProductController.handleCreate
);

router.post("/update", upload.single("image"), adminProductController.update);

router.get("/:slug", adminProductController.getOne);

router.get("/", adminProductController.index);

module.exports = router;
