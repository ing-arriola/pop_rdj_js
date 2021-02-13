import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./Components/Hoc/Layout";
import HomePage from "./Pages/HomePage";
import Register from "./Pages/Register";
import Users from './Pages/Users'
import {Auth0Provider} from '@auth0/auth0-react'
import TableContainer from "./Container/TableContainer";

const domain=process.env.REACT_APP_AUTH0_DOMAIN
const id=process.env.REACT_APP_AUTH0_CLIENT_ID

function App() {
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
          <Route path="/table" component={TableContainer}></Route>
          <Route path="/" component={HomePage}></Route>
        </Switch>
      </Layout>
    </Router>
    </Auth0Provider>

  );
}

export default App;
