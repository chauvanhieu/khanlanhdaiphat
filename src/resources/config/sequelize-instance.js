const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("khanlanhdaiphat", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
