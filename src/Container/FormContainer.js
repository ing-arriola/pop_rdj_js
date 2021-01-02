import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

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
      <Form.Group controlId="formPhone">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="text" placeholder="Telefono principal" />
      </Form.Group>
      <Form.Group controlId="formPhone2">
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="Telefono secundario" />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label></Form.Label>
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

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormContainer;
