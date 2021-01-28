const mysql = require("mysql");
const {db_password} = require("../config.js")
const connection = mysql.createConnection({
  user: "root",
  password: db_password,
  database: "employeeDirectory",
});

module.exports = connection;
