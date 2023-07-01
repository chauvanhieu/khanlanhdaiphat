/** @format */

const express = require("express");
const router = express.Router();

const adminIndex = require("./adminRouter/index");
const clientIndex = require("./clientRouter/indexRouter");
const aboutRouter = require("./clientRouter/aboutRouter");
const serviceRouter = require("./clientRouter/serviceRouter");
const quoteRouter = require("./clientRouter/quoteRouter");
const contactRouter = require("./clientRouter/contactRouter");

const adminAboutRouter = require("./adminRouter/about");
const adminQuoteRouter = require("./adminRouter/quote");
const adminServiceRouter = require("./adminRouter/service");
const adminCustomerRouter = require("./adminRouter/customer");

function initRouter(app) {
  // ROUTING FOR ADMIN PAGE
  app.use("/admin", adminIndex);
  app.use("/admin/gioi-thieu", adminAboutRouter);
  app.use("/admin/bang-bao-gia", adminQuoteRouter);
  app.use("/admin/dich-vu", adminServiceRouter);
  app.use("/admin/khach-hang", adminCustomerRouter);

  // ROUTING FOR CLIENT PAGE
  app.use("/bao-gia", quoteRouter);
  app.use("/dich-vu", serviceRouter);
  app.use("/gioi-thieu", aboutRouter);
  app.use("/lien-he", contactRouter);

  // ROUTING FOR HOME PAGE
  app.use("/", clientIndex);
}

module.exports = initRouter;
