import React, {useState} from "react";
import {Button, Form, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import data from "./users.json"
import ModalResults from "../Components/ModalResults";
import Calendar from "../Components/Calendar";
import moment from "moment";
const company = {
    name: "Applaudo Studios",
    id: 1,
    participants: data.users
};

const SingleResultContainer = () => {
    const [selectedDays,setSelectedDays] = useState([])

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
                <div className='text-center'>
                    <h1 className="mb-4" > Bienvenido a la evaluacion de pasantes </h1>

                    <h4 className="mb-3">Por favor sigue estos sencillos pasos:</h4>
                    <div className="w-75 mb-4 h4 m-auto">
                        <ol >
                            <li><strong>Establece la fecha a evaluar:</strong> Para esto, puedes navegar con las fechas en el calendario para establecer
                                el mes a evaluar y luego debes dar  click en el calendario sobre la semana que deseas ver los resultados</li>
                            <div className="d-flex justify-content-center">
                                <Calendar selectedDays={selectedDays} setSelectedDays={setSelectedDays} />
                            </div>
                            <li> <strong>Selecciona persona de la que gusta ver su resultado:</strong>  En el siguiente listado, por favor da click en el boton correspondiente al pasante</li>
                        </ol>
                        <div className="d-flex justify-content-center">
                            {selectedDays.length === 7 ? (
                                    <h4 className="bg-success text-white rounded px-4" >
                                        <strong>Estas evaluando la semana:</strong>
                                        {moment(selectedDays[1]).format('LL')} –{' '}
                                        {moment(selectedDays[5]).format('LL')}
                                    </h4>
                                ):
                                (
                                    <h4 className="font-weight-bold bg-danger text-white rounded px-4" >Aun no has establecido una semana para evaluar</h4>
                                )
                            }
                        </div>
                    </div>
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
