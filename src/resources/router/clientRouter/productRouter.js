const express = require("express");
const router = express.Router();

const ProductController = require("../../controller/productController");

router.use("/", ProductController.index);

module.exports = router;
