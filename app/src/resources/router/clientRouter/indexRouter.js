const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("clientTemplate/index");
});

module.exports = router;
