import React, { useState, useEffect } from "react";
import employee_data from "../../employee_data.js";
import Employee from "../Employee/Employee.js";
import "./app-style.scss";
import searchIcon from "../../../dist/asset/searchIcon.png";
import logo from "../../../dist/asset/kiewitlogo.png";
import Search from "../Search/Search.js";


const App = () => {
  const [employeeList, setEmployeeList] = useState(employee_data);
  const [departmentList, setDepartmentList] = useState([
    "Select By Department",
    "Film",
    "Music",
    "Sports",
  ]);

  const [displaySearchBar, setDisplaySearchBar] = useState(false);

  useEffect(() => {});

  const fetchAllEmployeeList = () => {
    setDepartmentList(employee_data);
    setDisplaySearchBar(false)
  };

  const handleDepartmentChange = (e) => {
    let dept = e.target.value;
    if( dept === "Select By Department") {
      fetchAllEmployeeList();
    }
    e.preventDefault();
    let filteredByDept = Promise.resolve(
      employeeList.filter((employee) => employee.department === dept)
    );
    return filteredByDept
      .then((value) => {
        setEmployeeList(value);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <>
      <nav className="nav-container">
        <img id="logo" src={logo} alt="Kiewit Logo" />

        <button
          className="menu"
          id="view-all"
          onClick={() => {
            setEmployeeList(employee_data);
          }}
        >
          View all Employees
        </button>

        <button
          className="menu"
          onClick={() => {
            setDisplaySearchBar(displaySearchBar? false : true);
          }}
        >
          Search By Name
        </button>

        <select className="menu" id="dropdown-btn" value="Select By Department" onChange={handleDepartmentChange}>
          {departmentList.map((department) => {
            return (
                <option className="department-category" value={department}>{department}</option>
            );
          })}
        </select>


        <button type="number" className="menu" onClick={() => {
            setDisplaySearchBar(displaySearchBar? false : true);
          }}>
          Filter By Age
        </button>
      </nav>

      <main>
        <section className="search">
          {displaySearchBar ? (
            <Search
              setDisplaySearchBar={setDisplaySearchBar}
              displaySearchBar={displaySearchBar}
              employeeList={employeeList}
              setEmployeeList={setEmployeeList}
            />
          ) : (
            <></>
          )}
        </section>

        <section>
          <div></div>

          <ul className="employee-list">
            {employeeList.map((employee) => {
              return <Employee key={employee.name} employee={employee} />;
            })}
          </ul>
        </section>
      </main>
    </>
  );
};

export default App;
