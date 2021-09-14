import React, { useEffect, useState } from 'react';
import { Alert, Button, Container, Form, Modal } from 'react-bootstrap';
import Select from 'react-select';
import firebaseConfig, { db } from '../utils/firebase';
import gifTenor from '../Resources/tenor.gif';
import { Link } from 'react-router-dom';

const InternshipsForm = () => {
  const [newInternship, setNewInternship] = useState({
    name: '',
    modality: '',
    duration: '',
    description: ''
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [institutions, setInstitutios] = useState([]);
  const [interInstitutions, setInterInstitutions] = useState(false);
  const [error, setError] = useState(false);
  const {
    name,
    modality,
    duration, description
  } = newInternship;
  useEffect(() => {
    const data = db.ref('companies').on('value', data => {
      const companies = data.val();
      const setOptionsCompanies = [];
      for (let company of companies) {
        setOptionsCompanies.push({ value: company.id, label: company.name });
      }
      setInstitutios(setOptionsCompanies);
    });
  }, []);
  const onChange = (e) =>
    setNewInternship({ ...newInternship, [e.target.name]: e.target.value });
  const sendForm = (e) => {
    e.preventDefault();
    if (!interInstitutions) {
      setError(true);
    } else {
      setError(false);
      newInternship.institution = interInstitutions;
      const dbRef = firebaseConfig.database();
      dbRef.ref('internships').push(newInternship).then(() => {
        handleShow();
      }, (error) => alert('Algo salio mal.'));
    }
  };
  return (<>
    <Container>
      <h2 className='text-center mt-3'>Nueva pasantia</h2>
      <Form onSubmit={sendForm}>
        <Form.Group className='mb-3' controlId='formName'>
          <Form.Label>Cargo a desempeñar</Form.Label>
          <Form.Control name='name'
                        value={name} onChange={onChange} type='text' placeholder='Ingresa el cargo' required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formInstitution'>
          <Form.Label>Institucion</Form.Label>
          <Select options={institutions} value={interInstitutions} onChange={(d) => {
            setInterInstitutions(d);
            setError(false);
          }} />
          {error ? <Alert key={1} variant={'danger'} className='mt-1'>
            Error, selecciona la institución a la que pertenece la pasantía.
          </Alert> : ''}
        </Form.Group>
        <Form.Group className='mb-3' controlId='formModal'>
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

        <Form.Group className='mb-3' controlId='formName'>
          <Form.Label>Duración de la pasantía (meses)</Form.Label>
          <Form.Control name='duration' value={duration} onChange={onChange} type='number'
                        placeholder='Ingresar el numero de meses que durara la pasanatia' required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formName'>
          <Form.Label>Descripción</Form.Label>
          <Form.Control name='description' value={description} onChange={onChange} as='textarea' rows={3} required />
        </Form.Group>
        <div className='d-flex justify-content-center mb-3'>
          <button className='btn rdjf'>Crear pasantia</button>
        </div>
      </Form>
    </Container>
    <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Pasantia creada</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          La pasantia ha sido publicada.{' '}
          <img src={gifTenor} alt='' width={100} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Link to='/internships'>


          <Button
            variant='primary'
            onClick={handleClose}
            style={{
              backgroundColor: '#FE3E00',
              borderBlockColor: '#FE3E00',
              boxShadow: '#FE3E00',
              borderBottomColor: '#FE3E00',
              borderColor: '#FE3E00'
            }}
          >
            Aceptar
          </Button></Link>
      </Modal.Footer>
    </Modal>
  </>);
};
export default InternshipsForm;
