import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.js";
import './index-style.scss';


const mountNode = document.getElementById("app");
ReactDOM.render( <App />, mountNode);