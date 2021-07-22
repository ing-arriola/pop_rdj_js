import React, { useEffect, useState } from 'react';
import { Alert, Container, Form } from 'react-bootstrap';
import Select from 'react-select'
import { db } from '../utils/firebase';

const InternshipsForm = () =>{
  const [newInternship, setNewInternship] = useState({
    name: '',
    modality: '',
    duration: '',
    description: ''
  });
  const [institutions, setInstitutios] = useState([]);
  const [interInstitutions, setInterInstitutions] = useState(false);
  const [error,setError] = useState(false);
  const {name,
    modality,
    duration, description} = newInternship;
  useEffect(() => {
    const data = db.ref('companies').on('value', data => {
      const companies = data.val();
      const setOptionsCompanies = [];
      for (let company of companies) {
        setOptionsCompanies.push({value: company.id, label: company.name})
      }
      setInstitutios(setOptionsCompanies);
    });
  }, []);
  const onChange = (e) =>
    setNewInternship({ ...newInternship, [e.target.name]: e.target.value });
  const sendForm=(e)=>{
    e.preventDefault();
    if (!interInstitutions){
      setError(true);
    }else{
      setError(false);
      newInternship.institution = interInstitutions;
    }
  }
  return(<>
    <Container>
      <h2 className="text-center mt-3">Nueva pasantia</h2>
      <Form onSubmit={sendForm}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Cargo a desempeñar</Form.Label>
          <Form.Control name='name'
                        value={name} onChange={onChange} type="text" placeholder="Ingresa el cargo" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formInstitution">
          <Form.Label>Institucion</Form.Label>
          <Select options={institutions} value={interInstitutions} onChange={(d)=>{
            setInterInstitutions(d);
            setError(false);
          }}/>
          {error? <Alert key={1} variant={"danger"} className="mt-1">
            Error, selecciona la institución a la que pertenece la pasantía.
          </Alert>: ""}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formModal">
          <Form.Label>Modalidad de la pasantía</Form.Label>
          <Form.Control
            name='modality'
            as='select'
            value={modality}
            onChange={onChange}
            required
          >
            <option value='' selected hidden>
              Elige una modalidad
            </option>
            <option>Remoto</option>
            <option>Presencial</option>

          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Duración de la pasantía (meses)</Form.Label>
          <Form.Control name="duration" value={duration} onChange={onChange} type="number" placeholder="Ingresar el numero de meses que durara la pasanatia" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Descripción</Form.Label>
          <Form.Control name="description" value={description} onChange={onChange} as="textarea" rows={3} required/>
        </Form.Group>
        <div className="d-flex justify-content-center mb-3">
          <button className="btn rdjf">Crear pasantia</button>
        </div>
      </Form>
    </Container>
  </>);
}
export default InternshipsForm;
