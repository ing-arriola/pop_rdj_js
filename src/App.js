import "./App.css";
import {Route, Switch} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import React from "react";
import Register from "./Pages/Register";

function App() {
    return (
        <Switch>
            <Route path="/home">
                <HomePage/>
            </Route>
            <Route path="/register">
                <Register/>
            </Route>
        </Switch>);
}

export default App;
