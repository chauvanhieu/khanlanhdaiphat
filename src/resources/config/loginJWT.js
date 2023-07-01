function setupJWT(app) {
  app.use("/admin", authentication);
}

const authentication = (req, res, next) => {
  const token = req.cookies.adminToken;
  if (!token || token.length < 0 || token === undefined) {
    res.clearCookie("adminToken");
    return res.redirect("/dang-nhap");
  }
  next();
};
module.exports = setupJWT;
