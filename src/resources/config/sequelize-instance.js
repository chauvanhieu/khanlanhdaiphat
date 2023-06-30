const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("khanlanhdaiphat", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

sequelize.authenticate().catch((error) => {
  console.error("Lỗi kết nối cơ sở dữ liệu:", error);
});

sequelize.sync();

module.exports = sequelize;
