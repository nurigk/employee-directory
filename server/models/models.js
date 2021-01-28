const db = require("../../database/index.js");

module.exports = {
  createEmployee: (employee, callback) => {
    const queryStr =
      "insert into employee (employeeName, age, department) values (?, ?, ?)";
    db.query(queryStr, employee, (err, data) => {
      if (err) {
        console.log("errmodel", err)
        callback("err", err);
      } else {
        callback(null, data);
      }
    });
  },
  readAllEmployee: (callback) => {
    const queryStr = "select * from employee";
    db.query(queryStr, (err, data) => {
      if (err) {
        console.log("errmodel", err)
        callback(err);
      } else {
        callback(null, data);
      }
    });
  },

};
