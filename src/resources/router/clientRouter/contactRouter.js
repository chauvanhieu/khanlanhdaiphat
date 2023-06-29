/** @format */

const express = require("express");
const router = express.Router();

const AboutController = require("../../controller/contactController");

router.use("/", AboutController.index);

module.exports = router;
