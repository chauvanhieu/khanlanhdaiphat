const express = require("express");
const router = express.Router();

const ServiceController = require("../../controller/serviceController");

router.use("/", ServiceController.index);

module.exports = router;
