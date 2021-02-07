import React from 'react'
import {Table} from 'react-bootstrap'

const dummie=[
    {
        'name':'name1',
        'lastname':'last2',
        'phone':'12345',
        'email':'user123@gmail.com',
        'education':'university',
        'profession':'psicologia'
    },
    {
        'name':'name2',
        'lastname':'last2',
        'phone':'12345',
        'email':'user123@gmail.com',
        'education':'university',
        'profession':'psicologia'
    },
    {
        'name':'name3',
        'lastname':'last2',
        'phone':'12345',
        'email':'user123@gmail.com',
        'education':'university',
        'profession':'psicologia'
    },
]

const tableToRender=(
    <Table striped bordered hover>
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
  <tbody>
    {dummie.map(data  => (
         <tr>
         <td>{data.name}</td>
         <td>{data.lastname}</td>
         <td>{data.phone}</td>
         <td>{data.email} </td>
         <td>{data.education} </td>
         <td>{data.profession} </td>
       </tr>
    ))}
  </tbody>
</Table>
)



const TableContainer = () => {
    return (
        <div>
           {tableToRender} 
        </div>
    )
}

export default TableContainer
