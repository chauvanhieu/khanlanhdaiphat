/** @format */

const express = require("express");
const router = express.Router();

const adminIndex = require("./adminRouter/index");
const clientIndex = require("./clientRouter/indexRouter");
const aboutRouter = require("./clientRouter/aboutRouter");
const serviceRouter = require("./clientRouter/serviceRouter");
const quoteRouter = require("./clientRouter/quoteRouter");
const contactRouter = require("./clientRouter/contactRouter");
const productRouter = require("./clientRouter/productRouter");
const orderRouter = require("./clientRouter/orderRouter");

const adminAboutRouter = require("./adminRouter/about");
const adminQuoteRouter = require("./adminRouter/quote");
const adminServiceRouter = require("./adminRouter/service");
const adminCustomerRouter = require("./adminRouter/customer");
const adminLoginRouter = require("./adminRouter/login");
const adminLogoutRouter = require("./adminRouter/logout");
const adminOrderRouter = require("./adminRouter/order");
const adminCategoryRouter = require("./adminRouter/category");
const adminProductRouter = require("./adminRouter/product");

function initRouter(app) {
  // ROUTING FOR ADMIN PAGE
  app.use("/admin", adminIndex);
  app.use("/admin/gioi-thieu", adminAboutRouter);
  app.use("/admin/bang-bao-gia", adminQuoteRouter);
  app.use("/admin/dich-vu", adminServiceRouter);
  app.use("/admin/khach-hang", adminCustomerRouter);
  app.use("/admin/don-hang", adminOrderRouter);
  app.use("/admin/danh-muc", adminCategoryRouter);
  app.use("/admin/san-pham", adminProductRouter);
  app.use("/dang-nhap", adminLoginRouter);
  app.use("/dang-xuat", adminLogoutRouter);

  // ROUTING FOR CLIENT PAGE
  app.use("/bao-gia", quoteRouter);
  app.use("/dich-vu", serviceRouter);
  app.use("/gioi-thieu", aboutRouter);
  app.use("/lien-he", contactRouter);
  app.use("/san-pham", productRouter);
  app.use("/dat-hang", orderRouter);

  // ROUTING FOR HOME PAGE
  app.use("/", clientIndex);
}

module.exports = initRouter;
