import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import App from "./App";
import Register from "./Pages/Register";
import HomePage from "./Pages/HomePage";

ReactDOM.render(
  <BrowserRouter>
      <App/>

  </BrowserRouter>,
  document.getElementById("root")
);
