const { DataTypes } = require("sequelize");
const sequelize = require("./your-sequelize-instance");

const Service = sequelize.define(
  "Service",
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
    slug: {
      type: DataTypes.STRING(300),
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
      type: DataTypes.STRING(500),
      allowNull: false,
    },
  },
  {
    tableName: "services",
    timestamps: false,
  }
);

module.exports = Service;
