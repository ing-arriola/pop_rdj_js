import React from 'react';
import LoginContainer from '../Container/LoginContainer';
import { withRouter } from 'react-router-dom';
import { auth } from '../utils/firebase';


const LoginPage = (props) => {
  React.useEffect(() => {
    if (auth.currentUser) {
      props.history.push('/');
    }
  }, [props.history]);
  return (
    <>
      <div className='d-flex justify-content-center pt-5 pb-5'>
        <LoginContainer />
      </div>
    </>
  );
};

export default withRouter(LoginPage);

