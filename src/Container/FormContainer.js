import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

const FormContainer = () => {
  const [tech, setTech] = useState([]);

  return (
    <Form className="mx-5 px-5 ">
      <Form.Group controlId="formName">
        <Form.Label>Nombres</Form.Label>
        <Form.Control type="text" placeholder="Escribe tus nombres" />
      </Form.Group>
      <Form.Group controlId="formLastname">
        <Form.Label>Apellidos</Form.Label>
        <Form.Control type="text" placeholder="Escribe tus apellidos" />
      </Form.Group>
      <Form.Group controlId="formage">
        <Form.Label>Edad</Form.Label>
        <Form.Control type="text" placeholder="Ingresa tu edad" />
      </Form.Group>
      <Form.Group controlId="formPhone">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="text" placeholder="Telefono principal" />
      </Form.Group>
      <Form.Group controlId="formPhone2">
        <Form.Label>Telefono secundario</Form.Label>
        <Form.Control type="text" placeholder="Telefono secundario" />
        <Form.Text className="text-muted">
          Telefono de respaldo donde se te contactara si no puedes atenter a tu
          telefono principal
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Correo electronico</Form.Label>
        <Form.Control type="email" placeholder="correo electronico" />
      </Form.Group>

      <Form.Group controlId="formEducation">
        <Form.Label>Nivel de estudios</Form.Label>
        <Form.Control as="select">
          <option>Bachillerato</option>
          <option>Universidad (No graduado) </option>
          <option>Universidad (Gradudado)</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formPhone">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="text" placeholder="Telefono principal" />
      </Form.Group>

      <Form.Row>
        <Form.Label>Habilidades</Form.Label>
      </Form.Row>

      <Form.Row>
        <Col>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="text" placeholder="Excel, Word, Ingles,etc" />
          </Form.Group>
        </Col>

        <Col>
          <Button variant="primary">+</Button>
        </Col>
      </Form.Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormContainer;
