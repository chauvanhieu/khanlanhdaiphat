const mysql = require("mysql2");
const MySQL = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "khanlanhdaiphat",
});

module.exports = MySQL;
