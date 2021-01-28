import React, { useState, useEffect } from "react";
import "./search-style.scss";

const Search = ({setDisplaySearchBar, displaySearchBar, employeeList, setEmployeeList}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filterByName = (searchTerm) => {
    let integer = Number(searchTerm)
    if (Number.isInteger(integer)) {
      let filteredByAge = Promise.resolve(
        employeeList.filter((employee) => {
          return integer === employee.age;
        })
      );
      return filteredByAge
        .then((value) => {
          setEmployeeList(value);
          setSearchTerm("");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      let filteredByName = Promise.resolve(
        employeeList.filter((employee) => {
          let name = employee.employeeName.toLowerCase();
          return name.includes(searchTerm);
        })
      );
      return filteredByName
        .then((value) => {
          setEmployeeList(value);
          setSearchTerm("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="search-bar">
      <span
        onClick={() => {
          setDisplaySearchBar(displaySearchBar? false : true);
        }}
      >
        &#10006;
      </span>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          filterByName(searchTerm);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
