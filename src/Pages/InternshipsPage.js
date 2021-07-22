import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const InternshipsPage = (props) => {
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
        <Card className="mb-4">
          <Card.Header>Remoto</Card.Header>
          <Card.Body className="d-flex justify-content-between">
            <div>
              <Card.Title>Asistente administrativo</Card.Title>
              <Card.Text>
                <h6>Red de jovenes del futuro</h6>
                <p>5 horas a la semana</p>
              </Card.Text>
            </div>
            <Button style={{height: "38px",
              alignSelf: "flex-end"}} variant="primary">Ver mas</Button>
          </Card.Body>
        </Card>
        <Card className="mb-4">
          <Card.Header>Presencial</Card.Header>
          <Card.Body className="d-flex justify-content-between">
            <div>
              <Card.Title>Asistente de medicina</Card.Title>
              <Card.Text>
                <h6>Analiza labs</h6>
                <p>Medio tiempo</p>
              </Card.Text>
            </div>
            <Button style={{height: "38px",
              alignSelf: "flex-end"}} variant="primary">Ver mas</Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default(InternshipsPage);

