import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const FormContainer = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    lastname: "",
    age: "",
    location: "",
    phone: "",
    phone2: "",
    email: "",
    education: "",
    profession: "",
    about: "",
  });

  const {
    name,
    lastname,
    age,
    location,
    phone,
    phone2,
    email,
    education,
    profession,
    about,
  } = newUser;

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
        <Form.Control
          as="select"
          name="location"
          value={location}
          onChange={onChange}
          required
        >
          <option value="" selected hidden>
            Selecciona tu departamento
          </option>
          <option value="Ahuchapan">Ahuchapan</option>
          <option value="Cabañas">Cabañas</option>
          <option value="Chalatenango">Chalatenango</option>
          <option value="Cuscatlan">Cuscatlan</option>
          <option value="La Libertad">La Libertad</option>
          <option value="La Paz">La Paz</option>
          <option value="La Union">La Union</option>
          <option value="Morazan">Morazan</option>
          <option value="Santa Ana">Santa Ana</option>
          <option value="San Salvador">San Salvador</option>
          <option value="San Miguel">San Miguel</option>
          <option value="San Vicente">San Vicente</option>
          <option value="Sonsonate">Sonsonate</option>
          <option value="Usulutan">Usulutan</option>
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
        <Form.Text className="text-muted">
          Utiliza un email con aspecto profesional
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formEducation">
        <Form.Label>Respecto a la universidad eres</Form.Label>
        <Form.Control
          name="education"
          as="select"
          value={education}
          onChange={onChange}
          required
        >
          <option value="" selected hidden>
            Elige una opcion
          </option>
          <option>Estudiante activo</option>
          <option>Egresado</option>
          <option>Gradudado</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formProfession">
        <Form.Label>Selecciona tu area de estudios </Form.Label>
        <Form.Control
          name="profession"
          as="select"
          value={profession}
          onChange={onChange}
          required
        >
          <option value="" selected hidden>
            Selecciona tu area de estudios
          </option>
          <option>Adminstracion de empresas turisticas</option>
          <option>Comunicaciones</option>
          <option>Diseño grafico</option>
          <option>Idiomas</option>
          <option>Periodismo</option>
          <option>Publicidad</option>
          <option>Psicologia</option>
          <option>Relaciones publicas</option>
          <option>Salud (enfermeria)</option>
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
          rows={4}
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
