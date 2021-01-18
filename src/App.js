import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./Components/Hoc/Layout";
import HomePage from "./Pages/HomePage";
import React from "react";
import Register from "./Pages/Register";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/signup" component={Register}></Route>
          <Route path="/" component={HomePage}></Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
