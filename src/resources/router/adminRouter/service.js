const express = require("express");
const router = express.Router();

const adminServiceController = require("../../controller/admin/serviceController");

router.get("/", adminServiceController.index);

router.post("/", adminServiceController.handlePost);

module.exports = router;
