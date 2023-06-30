const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize-instance");
const Category = require("./categories");

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    infomation: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    slug: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    seo_title: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    seo_keywords: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    seo_description: {
      type: DataTypes.STRING(600),
      allowNull: false,
    },
  },
  {
    tableName: "products",
    timestamps: false,
  }
);

Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

module.exports = Product;
