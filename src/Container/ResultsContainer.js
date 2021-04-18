import React, {useState} from "react";
import {Button, Table, Form} from 'react-bootstrap'
import logoRdf from "../Resources/logo_rjf.png";

const companies = [{
    name: "Applaudo Studios",
    id: 1
},
    {
        name: "Elaniin",
        id: 2
    },
    {
        name: "Facebook",
        id: 3
    },
    {
        name: "Hugo",
        id: 4
    }];
const ResultsContainer = () => {
    const [arrayCompanies, setCompanies] = useState(companies);
    const handleOpenQuestion = (e) => {
        const value = e.target.value;
        if (!value) {
            setCompanies(companies);
        }
        setCompanies(companies.filter((company) => company.name.toLowerCase().includes(value.toLowerCase())))
        console.log(arrayCompanies);
    }
    return (
        <>
            <div className="d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center">
                    <img
                        src={logoRdf}
                        width={350}
                        className="p-3 img-fluid"
                        alt="RDF Logo"
                    />
                    <h1 className="mb-4"> Bienvenido a la evaluacion de pasantes </h1>
                    <h4 className="text-center w-75 mb-4">A continuacion podra ver un listado de los pasantes que
                        colaboran en su institucion, para
                        proceder a evaluarlos, por favor haga click en el boton correspondiente al pasante que desea
                        evaluar
                    </h4>
                </div>
                <Table striped bordered hover className="w-75 mb-5">
                    <thead>
                    <tr>
                        <th className="text-center d-flex justify-content-around align-items-center">
                            <div>Nombre</div>
                            <Form>
                                <Form.Group controlId="formBasicEmail" className="mb-0">
                                    <Form.Control type="text" placeholder="Search" onChange={handleOpenQuestion}/>
                                </Form.Group>
                            </Form>
                        </th>
                        <th className="text-center">Accion</th>
                    </tr>
                    </thead>
                    <tbody>
                    {arrayCompanies.map(company => (
                        <tr>
                            <td className="text-center">{company.name}</td>
                            <td className="d-flex justify-content-center">
                                <Button
                                    variant="primary"
                                    onClick={() => console.log(company.name)}
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
        </>
    );
};

export default ResultsContainer;
