const express = require("express");
var compression = require('compression')
const app = express();
const port = 5000;
const path = require("path");
const bodyParser = require("body-parser");
const { readAllEmployee, createEmployee } = require("./models/models.js");
const morgan = require("morgan");

app.use(compression())
app.use("/", express.static(path.join(__dirname, "../client/dist")));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.listen(port, () =>
  console.log("Employee-directory app listening on port", port)
);

app.get("/employees", (req, res) => {
  readAllEmployee((err, data) => {
    if (err) {
      console.log('errFromGet', err);
      res.sendStatus(500);
    } else {
      res.status(200).json(data);
    }
  });
});

app.post("/employees", (req, res) => {
  const employee = req.body;
  const params = [employee.name, employee.age, employee.department];
  createEmployee(params, (err, data) => {
    if (err) {
      console.log('errFromPost', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});
