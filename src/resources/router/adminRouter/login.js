/** @format */

const express = require("express");
const router = express.Router();

const adminLoginController = require("../../controller/admin/loginController");

router.get("/", adminLoginController.index);
router.post("/", adminLoginController.login);

module.exports = router;
