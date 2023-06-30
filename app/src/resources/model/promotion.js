const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize-instance");

const Promotion = sequelize.define(
  "Promotion",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    seo_title: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    seo_keywords: {
      type: DataTypes.STRING(600),
      allowNull: false,
    },
    seo_description: {
      type: DataTypes.STRING(600),
      allowNull: false,
    },
  },
  {
    tableName: "promotion",
    timestamps: false,
  }
);

module.exports = Promotion;
