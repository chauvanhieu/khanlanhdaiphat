const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize-instance");
const Product = require("./products");

const Order = sequelize.define(
  "Order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    customer_name: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    customer_address: {
      type: DataTypes.STRING(600),
      allowNull: false,
    },
    customer_phoneNumber: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    tableName: "orders",
    timestamps: false,
  }
);

Order.belongsTo(Product, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});

module.exports = Order;
