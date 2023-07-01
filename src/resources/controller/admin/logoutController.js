class LogoutController {
  index(req, res) {
    res.clearCookie("adminToken");
    return res.redirect("/dang-nhap");
  }
}

module.exports = new LogoutController();
