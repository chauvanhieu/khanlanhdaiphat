const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize-instance");

const Admin = sequelize.define(
  "Admin",
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
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(30),
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
    google_map: {
      type: DataTypes.STRING(1500),
      allowNull: false,
    },
    facebook_id: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    zalo_phoneNumber: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    head_script: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "admin",
    timestamps: false,
  }
);

module.exports = Admin;
