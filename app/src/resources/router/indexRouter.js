/** @format */

const express = require("express");
const router = express.Router();

const adminIndex = require("./adminRouter/index");
const clientIndex = require("./clientRouter/indexRouter");
const aboutRouter = require("./clientRouter/aboutRouter");
const serviceRouter = require("./clientRouter/serviceRouter");
const quoteRouter = require("./clientRouter/quoteRouter");
const contactRouter = require("./clientRouter/contactRouter");

function initRouter(app) {
  // ROUTING FOR ADMIN PAGE
  app.use("/admin", adminIndex);

  // ROUTING FOR CLIENT PAGE
  app.use("/bao-gia", quoteRouter);
  app.use("/dich-vu", serviceRouter);
  app.use("/gioi-thieu", aboutRouter);
  app.use("/lien-he", contactRouter);

  // ROUTING FOR HOME PAGE
  app.use("/", clientIndex);
}

module.exports = initRouter;