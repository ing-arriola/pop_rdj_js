import React, {useState} from 'react'
import {Table} from 'react-bootstrap'
import AuthServices from "../configs/AuthServices";
import {CircularProgress} from "@material-ui/core";
const tableToRender=(users)=>{
    return(<Table striped bordered hover>
        <thead>
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Telefono</th>
            <th>Correo</th>
            <th>Educacion</th>
            <th>Profesion</th>
        </tr>
        </thead>
        {users?
            <tbody>
        {users.map(data  => (
            <tr>
                <td>{data.name}</td>
                <td>{data.lastname}</td>
                <td>{data.phone}</td>
                <td>{data.email} </td>
                <td>{data.education} </td>
                <td>{data.profession} </td>
            </tr>
            ))}
        </tbody>:<CircularProgress className="m-auto"/>}
    </Table>);
}



const TableContainer = () => {
    const [show, setArray] = useState(null);
    AuthServices.getUsers().then(userList =>{
        setArray(userList.data.data);
    })
    return (
        <div>
           {tableToRender(show)}
        </div>
    )
}

export default TableContainer
