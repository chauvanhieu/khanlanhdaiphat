const express = require("express");
const router = express.Router();

const OrderController = require("../../controller/orderController");

router.post("/", OrderController.index);

module.exports = router;
