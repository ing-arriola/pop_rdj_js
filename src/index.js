import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import { BrowserRouter, Route } from "react-router-dom";

=======
import {BrowserRouter, Route, Switch} from "react-router-dom"
>>>>>>> 2003465075f6b148fc287ceada8d534632a98e0d
import App from "./App";
import Register from "./Pages/Register";
import HomePage from "./Pages/HomePage";

ReactDOM.render(
<<<<<<< HEAD
  <React.StrictMode>
    <BrowserRouter>
      <Fragment>
        <Route path="/" exact component={App} />
        <Route path="/registration" component={Register} />
      </Fragment>
    </BrowserRouter>
  </React.StrictMode>,
=======
  <BrowserRouter>
      <App/>

  </BrowserRouter>,
>>>>>>> 2003465075f6b148fc287ceada8d534632a98e0d
  document.getElementById("root")
);
