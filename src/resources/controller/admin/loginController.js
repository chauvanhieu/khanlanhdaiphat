const { where } = require("sequelize");
const Admin = require("../../model/admin");
const jwt = require("jsonwebtoken");

class AdminLoginController {
  index(req, res) {
    res.render("adminTemplate/login");
  }

  login(req, res) {
    const { username, password } = req.body;

    // Kiểm tra thông tin đăng nhập
    Admin.findOne({ where: { id: 1 }, username, password })
      .then((admin) => {
        if (admin.username === username && admin.password === password) {
            
          // Đăng nhập thành công, tạo token
          const token = jwt.sign({ adminId: admin.id }, "your_secret_key");
          res.cookie("adminToken", token);

          // Chuyển hướng đến trang dashboard sau khi đăng nhập thành công
          res.redirect("/admin/");
        } else {
          // Sai thông tin đăng nhập, hiển thị thông báo lỗi
          res.render("adminTemplate/login", {
            error: "Invalid username or password",
          });
        }
      })
      .catch((error) => {
        console.error(error);
        res.render("adminTemplate/login", { error: "An error occurred" });
      });
  }

}
module.exports = AdminLoginController;