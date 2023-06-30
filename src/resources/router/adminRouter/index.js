const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("adminTemplate/admin");
});

module.exports = router;
