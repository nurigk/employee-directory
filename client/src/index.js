import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.js";
import './index.scss';


const mountNode = document.getElementById("app");
ReactDOM.render( <App />, mountNode);