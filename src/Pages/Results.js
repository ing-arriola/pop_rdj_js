import React from 'react';
import ResultsContainer from '../Container/ResultsContainer';
import { withRouter } from 'react-router-dom';
import { auth } from '../utils/firebase';


const Results = (props) => {
  React.useEffect(() => {
    if (!auth.currentUser) {
      props.history.push('/login');
    }
  }, [props.history]);
  return (
    <>
      <div>
        <ResultsContainer />
      </div>
    </>
  );
};

export default withRouter(Results);

