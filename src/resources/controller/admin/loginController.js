const Admin = require("../../model/admin");

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
          const token = generateRandomString(20);

          // Đăng nhập thành công, tạo token
          res.cookie("adminToken", JSON.stringify(token));

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
module.exports = new AdminLoginController();

function generateRandomString(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
