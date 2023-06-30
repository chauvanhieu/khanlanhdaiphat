const express = require("express");
const router = express.Router();

const adminQuoteController = require("../../controller/admin/quoteController");

router.use("/", adminQuoteController.index);

router.post("/", adminQuoteController.handlePost);

module.exports = router;
