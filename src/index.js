import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./App";
import Register from "./Pages/Register";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Fragment>
        <Route path="/" exact component={App} />
        <Route path="/registration" component={Register} />
      </Fragment>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
