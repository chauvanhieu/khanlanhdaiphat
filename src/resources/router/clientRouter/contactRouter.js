/** @format */

const express = require("express");
const router = express.Router();

const AboutController = require("../../controller/contactController");

router.get("/", AboutController.index);

router.post("/", AboutController.handlePost);

module.exports = router;
