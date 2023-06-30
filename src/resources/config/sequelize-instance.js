const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("khanlanhdaiphat", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Kết nối cơ sở dữ liệu thành công!");
  })
  .catch((error) => {
    console.error("Lỗi kết nối cơ sở dữ liệu:", error);
  });

sequelize.sync().then(() => {
  console.log("Đồng bộ hóa mô hình thành công!");
});

module.exports = sequelize;
