import React from 'react';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const LoginButton = (props) => {
  const loginWithRedirect = () => {
    props.history.push('/login');
  };

  return (
    <Button
      onClick={() => loginWithRedirect()}
      className='btn btn-lg btn-block hero-button'
      style={{
        backgroundColor: '#FE3E00',
        borderBlockColor: '#FE3E00',
        boxShadow: '#FE3E00',
        borderBottomColor: '#FE3E00',
        borderColor: '#FE3E00'
      }}
    >
      Log in
    </Button>
  );
};

export default withRouter(LoginButton);
