import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Layout from "./Components/Hoc/Layout"
import HomePage from "./Pages/HomePage"
// import Register from "./Pages/Register"
// import Users from './Pages/Users'
import Users from './Pages/Users'
import PrivateRoute from './Container/PrivateRoute'
import {Auth0Provider} from '@auth0/auth0-react'
import "./App.css"

const domain=process.env.REACT_APP_AUTH0_DOMAIN
const id=process.env.REACT_APP_AUTH0_CLIENT_ID


const App = () => {
    return (
      <Auth0Provider
        domain={domain}
        clientId={id}
        redirectUri={window.location.origin}
      >
        <Router>
        <Layout>
          <Switch>
            {/*<Route path="/users" component={Users}></Route>*/}
            {/*<Route path="/signup" component={Register}></Route>*/}
             <PrivateRoute path="/users" component={Users}/>
            <Route path="/" component={HomePage}/>
          </Switch>
        </Layout>
      </Router>
      </Auth0Provider>
    )
}

export default App;
