const { DataTypes } = require("sequelize");
const sequelize = require("./your-sequelize-instance");

const Customer = sequelize.define(
  "Customer",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    problem: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
  },
  {
    tableName: "customers",
    timestamps: false,
  }
);

module.exports = Customer;
