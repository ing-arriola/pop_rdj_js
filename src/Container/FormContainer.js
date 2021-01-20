import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const FormContainer = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    lastname: "",
    age: "",
    phone: "",
    phone2: "",
    email: "",
    about: "",
  });

  const { name, lastname, age, phone, phone2, email, about } = newUser;

  const onChange = (e) =>
    setNewUser({ ...newUser, [e.target.name]: e.target.value });

  const sendData = (e) => {
    e.preventDefault();
    //here you just need to send this the newUser Object
    console.log(newUser);
  };

  return (
    <Form className="mx-5 px-5" onSubmit={sendData}>
      <Form.Group controlId="formName">
        <Form.Label>Nombres</Form.Label>
        <Form.Control
          name="name"
          value={name}
          type="text"
          placeholder="Escribe tus nombres"
          onChange={onChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formLastname">
        <Form.Label>Apellidos</Form.Label>
        <Form.Control
          name="lastname"
          value={lastname}
          type="text"
          placeholder="Escribe tus apellidos"
          onChange={onChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formage">
        <Form.Label>Edad</Form.Label>
        <Form.Control
          name="age"
          value={age}
          type="text"
          placeholder="Ingresa tu edad"
          onChange={onChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formLocation">
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
        <Form.Control
          name="phone"
          value={phone}
          type="text"
          placeholder="Telefono principal"
          onChange={onChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formPhone2">
        <Form.Label>Telefono secundario</Form.Label>
        <Form.Control
          name="phone2"
          value={phone2}
          type="text"
          placeholder="Telefono secundario"
          onChange={onChange}
          required
        />
        <Form.Text className="text-muted">
          Telefono de respaldo donde se te contactara si no puedes atenter a tu
          telefono principal
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Correo electronico</Form.Label>
        <Form.Control
          name="email"
          value={email}
          type="email"
          placeholder="correo electronico"
          onChange={onChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formEducation">
        <Form.Label>Nivel de estudios</Form.Label>
        <Form.Control as="select">
          <option>Bachillerato</option>
          <option>Universidad (No graduado) </option>
          <option>Universidad (Gradudado)</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formProfession">
        <Form.Label>Selecciona tu area de estudios</Form.Label>
        <Form.Control as="select">
          <option>Comunicaciones</option>
          <option>Docencia</option>
          <option>Economia</option>
          <option>Humanidades</option>
          <option>Idiomas</option>
          <option>Ingenieria</option>
          <option>Leyes</option>
          <option>Salud</option>
          <option>Tecnico</option>
          <option>Mi area de estudio no esta en la lista</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formAbout">
        <Form.Label>
          Cuentanos un poco sobre ti y de tu interes en POP
        </Form.Label>
        <Form.Control
          as="textarea"
          name="about"
          value={about}
          rows={5}
          onChange={onChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormContainer;

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
