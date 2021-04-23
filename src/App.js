import React from "react";
import Layout from "./Components/Hoc/Layout"
import HomePage from "./Pages/HomePage"
// import Register from "./Pages/Register"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Users from './Pages/Users'
import "./App.css"
import Results from "./Pages/Results";
import SingleResult from "./Pages/SingleResult";
import LoginPage from "./Pages/LoginPage";

const domain=process.env.REACT_APP_AUTH0_DOMAIN
const id=process.env.REACT_APP_AUTH0_CLIENT_ID


const App = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/users" component={Users}/>
                    <Route path="/results/:id" component={SingleResult}/>
                    <Route path="/results" component={Results}/>
                    <Route path="/" component={HomePage}/>
                </Switch>
            </Layout>
        </Router>
    )
}

export default App;
