const express = require("express");
const router = express.Router();

const QuoteController = require("../../controller/quoteController");

router.use("/", QuoteController.index);

module.exports = router;
