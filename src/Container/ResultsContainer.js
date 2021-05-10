import React, {useState} from "react";
import {Button, Table, Form} from 'react-bootstrap'
import logoRdf from "../Resources/logo_rjf.png";
import {Link} from "react-router-dom";
import {db} from "../utils/firebase";

const companiesData = [];
const ResultsContainer = () => {
    const [arrayCompanies, setCompanies] = useState([]);

    React.useEffect(() => {
        db.ref("companies").on("value", snapshot => {
            const companies = snapshot.val()
            companiesData.push(...companies)
            setCompanies(companies)
        }, (error) => console.log(error))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const handleSearch = (e) => {
        const value = e.target.value;
        if (!value) {
            setCompanies(companiesData);
            console.log(companiesData)
            return;
        }
        setCompanies(companiesData.filter((company) => company.name.toLowerCase().includes(value.toLowerCase())))
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
                    <h1 className="mb-4"> Bienvenido a los resultados de las evaluaciones </h1>
                    <h4 className="text-center w-75 mb-4">A continuación podrá ver un listado de las instituciones afiliadas,  por favor haga clic en el botón correspondiente a la institución que desea ver su resultado.
                    </h4>
                </div>
                <Form className='w-75'>
                    <Form.Group controlId="formBasicEmail" className="w-100 d-flex justify-content-center">
                        <Form.Control className='w-25 mr-3' type="text" placeholder="Search" onChange={handleSearch}/>
                        <Button className='rdjf'>Buscar</Button>
                    </Form.Group>
                </Form>
                {arrayCompanies.length !== 0 ? <Table striped bordered hover className="w-75 mb-5">
                    <thead>
                    <tr>
                        <th className="text-center d-flex justify-content-around align-items-center">
                            <div>Nombre</div>
                        </th>
                        <th className="text-center">Accion</th>
                    </tr>
                    </thead>
                    <tbody>
                    {arrayCompanies.map((company, key) => (
                        <tr key={key}>
                            <td className="text-center">{company.name}</td>
                            <td className="d-flex justify-content-center">
                                <Link to={{pathname: "/results/"+company.id}}>
                                    <Button
                                        variant="primary"
                                        className='rdjf'
                                    >
                                        Ver
                                    </Button></Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table> : <div>
                    Cargando datos...
                </div>}

            </div>
        </>
    );
};

export default ResultsContainer;
