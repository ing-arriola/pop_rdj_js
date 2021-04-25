import React from "react";
import ResultsContainer from "../Container/ResultsContainer";
import SingleResultContainer from "../Container/SingleResultContainer";
import {withRouter} from "react-router-dom";
import {auth} from "../utils/firebase";


const SingleResult = (props) => {
    React.useEffect(() => {
        if(!auth.currentUser){
            props.history.push('/login')
        }
    }, [props.history])
    return (
        <>
            <div>
               <SingleResultContainer/>
            </div>
        </>
    );
};

export default withRouter(SingleResult)
