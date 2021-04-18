import React, {useState} from "react";
import ResultsContainer from "../Container/ResultsContainer";
import {Button, Form, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

const company = {
    name: "Applaudo Studios",
    id: 1,
    participants: [
        {
            name: "Alexander",
            id: 1
        },
        {
            name: "Rodolfo",
            id: 2
        },
        {
            name: "Jaime",
            id: 3
        },
        {
            name: "Raul",
            id: 4
        },
        {
            name: "Antonio",
            id: 5
        },{
            name: "Randal",
            id: 6
        }
    ]
};

const SingleResultContainer = () => {
    const [arrayUsers, setUsers] = useState(company.participants);
    const handleSearch = (e) => {
        const value = e.target.value;
        if (!value) {
            setUsers(company.participants);
        }
        setUsers(company.participants.filter((company) => company.name.toLowerCase().includes(value.toLowerCase())))
    }
    return (
        <>
            <div className="container">
               <div className="d-flex justify-content-between p-5">
                   <Button
                       variant="primary"
                       style={{
                           backgroundColor: "#FE3E00",
                           borderBlockColor: "#FE3E00",
                           boxShadow: "#FE3E00",
                           borderBottomColor: "#FE3E00",
                           borderColor: "#FE3E00",
                       }}
                   >
                       Regresar
                   </Button>
                   <h3>Resultados de {company.name}</h3>
               </div>
                <div>
                    <Table striped bordered hover className=" mb-5">
                        <thead>
                        <tr>
                            <th className="text-center d-flex justify-content-around align-items-center">
                                <div>Nombre</div>
                                <Form>
                                    <Form.Group controlId="formBasicEmail" className="mb-0">
                                        <Form.Control type="text" placeholder="Search" onChange={handleSearch}/>
                                    </Form.Group>
                                </Form>
                            </th>
                            <th className="text-center">Accion</th>
                        </tr>
                        </thead>
                        <tbody>
                        {arrayUsers.map(user => (
                            <tr>
                                <td className="text-center">{user.name}</td>
                                <td className="d-flex justify-content-center">
                                        <Button
                                            variant="primary"
                                            onClick={() => console.log(user.name)}
                                            style={{
                                                backgroundColor: "#FE3E00",
                                                borderBlockColor: "#FE3E00",
                                                boxShadow: "#FE3E00",
                                                borderBottomColor: "#FE3E00",
                                                borderColor: "#FE3E00",
                                            }}
                                        >
                                            Ver
                                        </Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
};

export default SingleResultContainer;
