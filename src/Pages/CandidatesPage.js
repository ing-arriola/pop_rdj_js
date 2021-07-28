import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Modal } from 'react-bootstrap';
import { auth, db } from '../utils/firebase';
import { Link } from 'react-router-dom';
import gifTenor from '../Resources/tenor.gif';
const CandidatesPage = () => {
  const [currentUserData, setCurrentUserData] = useState({});
  const [internshipList, setIntershipList] = useState([]);
  const [currentIntern, setCurrentIntern] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setCurrentIntern(item);
    setShow(true);
  }
  useEffect(() => {
    db.ref('auth').on('value', snapshot => {
      const authUsers = snapshot.val();
      let currentUser = undefined;
      authUsers.forEach(user => {
        if (user.email === auth.currentUser.email) {
          currentUser = user;
          getListIntern(currentUser.idCompany)
        }
      });
      setCurrentUserData(currentUser);
    }, (error) => console.log(error));
  }, []);
  const getListIntern = (id) => {
    db.ref('internships').on('value', data => {
      const internships = data.val();
      const listOportinuties = [];
      for (let intern of Object.keys(internships)) {
        if (internships[intern].institution.value === id){
          listOportinuties.push((internships[intern]));
        }
      }
      setIntershipList(listOportinuties);
    });
  }
  const saveCV = () => {

  }
  return(<Container>
    {internshipList.length === 0 ? <h2>No hay candidatos</h2> : internshipList.map(item => (
      <Card className="mb-4">
        <Card.Header>{item.modality}</Card.Header>
        <Card.Body className="d-flex justify-content-between">
          <div>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              <h6>{item.institution.label}</h6>
              <p>Duracion de {item.duration} meses.</p>
            </Card.Text>
            <p>Numero de candidatos: {item.candidates ? item.candidates.length: 0}</p>
          </div>
          {
            item.candidates? <Button style={{height: "38px",
              alignSelf: "flex-end"}} variant="primary" onClick={() => handleShow(item.candidates)}>Ver mas</Button>: ""
          }
        </Card.Body>
      </Card>
    ))}
    <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Lista de candidatos: </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {currentIntern.map(item => (
          <Card>
            <Card.Header>{item.name}</Card.Header>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {item.email}
              </Card.Text>
              <a href={item.resume} className="btn btn-primary float-right" download={item.name}>Descargar CV</a>
            </Card.Body>
          </Card>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Link to='/'>
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
  </Container>);
}
export default CandidatesPage;
