const { DataTypes } = require("sequelize");
const sequelize = require("./your-sequelize-instance");

const About = sequelize.define(
  "About",
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
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    seo_description: {
      type: DataTypes.STRING(600),
      allowNull: false,
    },
  },
  {
    tableName: "about",
    timestamps: false,
  }
);

module.exports = About;
