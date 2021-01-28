CREATE DATABASE IF NOT EXISTS employeeDirectory;

use employeeDirectory;

DROP TABLE IF EXISTS employee;

CREATE TABLE employee (
  employeeId INTEGER(50) AUTO_INCREMENT,
  employeeName VARCHAR(20) not NULL,
  age integer(11) not null,
  department VARCHAR(20) not NULL,
  PRIMARY KEY (employeeId)
);
