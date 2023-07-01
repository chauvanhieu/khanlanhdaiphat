const express = require("express");
const router = express.Router();

const adminCustomerController = require("../../controller/admin/customerController");

router.get("/", adminCustomerController.index);

module.exports = router;
