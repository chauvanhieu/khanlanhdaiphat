const express = require("express");
const router = express.Router();

const ProductController = require("../../controller/productController");

router.get("/", ProductController.index);

router.get("/:slug", ProductController.showOne);

module.exports = router;
