import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { db } from '../utils/firebase';


const InternshipsPage = (props) => {
  const [internships, setInternships] = useState([]);
  useEffect(() => {
    db.ref('internships').on('value', data => {
      const internships = data.val();
      const setOportinities = [];
      for (let intern of Object.keys(internships)) {
        internships[intern].id = intern;
        setOportinities.push(internships[intern]);
      }
      console.log(setOportinities);
      setInternships(setOportinities);
      //setInternships(setOptionsCompanies);
    });
  }, []);
  return (
    <>
      <Container>
        <h2 className="text-center">Crear pasantias</h2>
        <div style={{height:"35px"}}>
          <Link to="internships/new">
            <button className="btn rdjf float-right">Agregar</button>
          </Link>
        </div>
        <hr/>
        {internships.map(intern => (
          <Card className="mb-4">
            <Card.Header>{intern.modality}</Card.Header>
            <Card.Body className="d-flex justify-content-between">
              <div>
                <Card.Title>{intern.name}</Card.Title>
                <Card.Text>
                  <h6>{intern.institution.label}</h6>
                  <p>Duracion de {intern.duration} meses.</p>
                </Card.Text>
              </div>
              <Button style={{height: "38px",
                alignSelf: "flex-end"}} variant="primary">Ver mas</Button>
            </Card.Body>
          </Card>
        ))}

      </Container>
    </>
  );
};

export default(InternshipsPage);

