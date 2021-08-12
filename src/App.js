import React from 'react';
import Layout from './Components/Hoc/Layout';
import HomePage from './Pages/HomePage';
import Register from './Pages/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Users from './Pages/Users';
import './App.css';
import Results from './Pages/Results';
import SingleResult from './Pages/SingleResult';
import LoginPage from './Pages/LoginPage';
import { auth, db } from './utils/firebase';
import AdminSettings from './Pages/AdminSettings';
import InternshipsPage from './Pages/InternshipsPage';
import InternshipsForm from './Container/InternshipsForm';
import SingleInternshipPage from './Pages/SingleInternshipPage';
import DashboardUser from './Pages/DashboardUser';
import CandidatesPage from './Pages/CandidatesPage';

const App = () => {
  const [firebaseUser, setFirebaseUser] = React.useState(false);
  const [role, setRole] = React.useState(null);

  React.useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setFirebaseUser(user);
        checkRol();
      } else {
        setFirebaseUser(null);
      }
    });
  }, []);
  const checkRol = () => {
    db.ref('auth').on('value', snapshot => {
      const authUsers = snapshot.val();
      let currentUser = undefined;
      authUsers.forEach(user => {
        if (user.email === auth.currentUser.email) {
          currentUser = user;
        }
      });
      setRole(currentUser.rol);
    }, (error) => console.log(error));
  };
  return firebaseUser !== false ? (
    <Router>
      <Layout>
        <Switch>
          <Route path='/login' component={LoginPage} />
          {role === 'company' && <Route path='/users' component={Users} />}
          <Route path='/results/:id' component={SingleResult} />
          <Route path='/results' component={Results} />
          {role === 'admin' && <Route path='/settings' component={AdminSettings} />}
          {role === 'admin' && <Route path='/internships/new' component={InternshipsForm} />}
          {!role && <Route path='/register' component={Register} />}


          {(role === 'admin' || role === 'intern') &&
          <Route path='/internships/:id' component={SingleInternshipPage} />}
          {(role === 'admin' || role === 'intern') && <Route path='/internships' component={InternshipsPage} />}

          {role === 'intern' && <Route path='/dashboard' component={DashboardUser} />}
          {role === 'company' && <Route path='/candidates' component={CandidatesPage} />}
          <Route path='/' component={HomePage} />
        </Switch>
      </Layout>
    </Router>
  ) : (
    <div>Cargando...</div>
  );
};

export default App;
