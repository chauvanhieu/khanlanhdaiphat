const path = require("path");
const express = require("express");

function setupUpload(app) {
  app.use(express.static(path.join(__dirname, "../../public")));
}
module.exports = setupUpload;
