import React from 'react';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { auth } from '../utils/firebase';

const LogoutButton = (props) => {
  const logOut = () => {
    auth.signOut().then(() => {
      props.history.push('/');
    });
  };

  return (
    <Button
      onClick={() => logOut()}
      className='btn btn-lg btn-block hero-button'
      style={{
        backgroundColor: '#FE3E00',
        borderBlockColor: '#FE3E00',
        boxShadow: '#FE3E00',
        borderBottomColor: '#FE3E00',
        borderColor: '#FE3E00'
      }}
    >
      Logout
    </Button>
  );
};

export default withRouter(LogoutButton);
