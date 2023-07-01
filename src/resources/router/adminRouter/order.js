const express = require("express");
const router = express.Router();

const adminOrderController = require("../../controller/admin/orderController");

router.get("/", adminOrderController.index);

module.exports = router;
