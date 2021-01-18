import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

const FormContainer = () => {
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
      <Form.Group controlId="formEducation">
        <Form.Label>Departamento de residencia</Form.Label>
        <Form.Control as="select">
          <option>Ahuchapan</option>
          <option>Cabañas</option>
          <option>Chalatenango</option>
          <option>Cuscatlan</option>
          <option>La Libertad</option>
          <option>La Paz</option>
          <option>La Union</option>
          <option>Morazan</option>
          <option>Santa Ana</option>
          <option>San Salvador</option>
          <option>San Miguel</option>
          <option>San Vicente</option>
          <option>Sonsonate</option>
          <option>Usulutan</option>
        </Form.Control>
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
        <Form.Label>Profesion</Form.Label>
        <Form.Control
          type="text"
          placeholder="Escribe el nombre de la carrera que estudias/estudiaste"
        />
      </Form.Group>

      <Form.Group controlId="formAbout">
        <Form.Label>
          Cuentanos un poco sobre ti y sobre tu interes en POP
        </Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormContainer;

/*

Cabañas
Chalatenango
Cuscatlan
La Libertad
La Paz
La Union
Morazan
Santa Ana
San Salvador
San Miguel
San Vicente
Sonsonate
Usulutan
 */

/*
NO YET MY FRIEND :(
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


*/
