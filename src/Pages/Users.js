import React from 'react'
import TableContainer from '../Container/TableContainer'
import { withRouter } from "react-router-dom";
import {auth} from "../firebase";

const Users = (props) => {

    React.useEffect(() => {
        if(!auth.currentUser){
            props.history.push('/login')
        }
    }, [props.history])
    return (
        <div>
            <TableContainer/>
        </div>
    )
}

export default withRouter(Users)
