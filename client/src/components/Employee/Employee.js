import React, { useState, useEffect } from "react";
import "./employee-style.scss";

const Employee = ({employee})=> {


    return (
      <div className="employee-container">
          <span><strong>Name</strong>: {employee.employeeName}</span>
          <span><strong>Department</strong>: {employee.department}</span>
          <span><strong>Age</strong>: {employee.age}</span>

      </div>
    );

}

export default Employee;