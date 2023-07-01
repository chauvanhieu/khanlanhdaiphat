const express = require("express");
const router = express.Router();

const adminLogoutController = require("../../controller/admin/logoutController");

router.get("/", adminLogoutController.index);

module.exports = router;
