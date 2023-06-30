/** @format */

const express = require("express");
const router = express.Router();

const adminAboutController = require("../../controller/admin/aboutController");

router.use("/", adminAboutController.index);

router.post("/", adminAboutController.handlePost);

module.exports = router;
