/** @format */

const express = require("express");
const router = express.Router();

const adminLoginController = require("../../controller/admin/loginController");

const loginController = new adminLoginController();

router.get("/", loginController.index);
router.post("/", loginController.login);

module.exports = router;