import React, {useState} from "react";
import ResultsContainer from "../Container/ResultsContainer";
import {Button, Form, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import data from "./users.json"
import ModalResults from "../Components/ModalResults";
const company = {
    name: "Applaudo Studios",
    id: 1,
    participants: data.users
};

const SingleResultContainer = () => {

    const [arrayUsers, setUsers] = useState(company.participants);
    const [modalShow, setModalShow] = useState(false);
    const [userId, setId] = useState(0);

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
                   <Link to="/results">
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
                   </Link>
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
                                            onClick={() => {
                                                setModalShow(true);
                                                setId(user)
                                            }}
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
                <ModalResults
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    idUser={userId}
                />
            </div>
        </>
    );
};

export default SingleResultContainer;
