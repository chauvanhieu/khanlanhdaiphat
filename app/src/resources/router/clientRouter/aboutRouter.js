const express = require("express");
const router = express.Router();

const AboutController = require("../../controller/aboutController");

router.use("/", AboutController.index);

module.exports = router;
