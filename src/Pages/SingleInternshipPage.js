import React, { useEffect, useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import { auth, db } from '../utils/firebase';
import { Link, useHistory } from 'react-router-dom';
import gifTenor from '../Resources/tenor.gif';

const SingleInternshipPage = () => {
  const [intership, setInternship] = useState(null);
  const [lastApply, setLastApply] = useState(false);
  const [currentUserData, setCurrentUserData] = useState({});
  const [candidate, setCandidate] = useState({resume:undefined, imageURL: undefined, flag: false});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const applyInternship = () => {
    const currentLoc = window.location.pathname.substr(13);
    const todoRef = db.ref('internships').child(String(currentLoc));
    if (!intership.candidates){
      const candidates = [];
      const interCandidate = {email: currentUserData.email, resume: candidate.resume};
      candidates.push(interCandidate);
      const intershipToUpdate = intership;
      intershipToUpdate.candidates = candidates;
      todoRef.update(intershipToUpdate).then(() => handleShow()).catch((error) => alert('error'));
    }else{
      const candidates = intership.candidates;
      const interCandidate = {email: currentUserData.email, resume: candidate.resume};
      candidates.push(interCandidate);
      const intershipToUpdate = intership;
      intershipToUpdate.candidates = candidates;
      todoRef.update(intershipToUpdate).then(() => handleShow()).catch((error) => alert('error'));
    }
    //
    //todoRef.update(newUser).then(() => handleShow()).catch((error) => alert('error'));
  }
  useEffect(() => {
    db.ref('internships').on('value', data => {
      const internships = data.val();
      for (let intern of Object.keys(internships)) {
        const curretnLoc = window.location.pathname.substr(13);
        if (curretnLoc === intern){
          setInternship(internships[intern])
          if (internships[intern].candidates){
            for (let candidateA of internships[intern].candidates){
              if (candidateA.email === auth.currentUser.email){
                setLastApply(true);
              }
            }
          }
          checkRol();
        }
      }
    });

  }, []);
  const getCandidateResume = (currentUser) => {
    db.ref('candidates').on('value', data => {
      const candidates = data.val();
      for (let intern of Object.keys(candidates)) {
        if (candidates[intern].email === currentUser.email){
          setCandidate(candidates[intern]);
          console.log(candidates[intern]);
        }
      }
    });
  }
  const checkRol = () => {
    db.ref('auth').on('value', snapshot => {
      const authUsers = snapshot.val();
      let currentUser = undefined;
      authUsers.forEach(user => {
        if (user.email === auth.currentUser.email) {
          currentUser = user;
          console.log(auth.currentUser);
          getCandidateResume(currentUser);
        }
      });
      setCurrentUserData(currentUser);
    }, (error) => console.log(error));
  };
  return(<Container>
    {intership?<div>
      <h2 className="text-center">{intership.name}</h2>
      <h5>{intership.institution.label}</h5>
      <p>Duracion: {intership.duration} meses.</p>
      <p>Modalidad: {intership.modality}</p>

      <strong>Descripcion: </strong>
      <p>{intership.description}</p>
      <div className="d-flex justify-content-center mb-2">
        {currentUserData.rol==="admin"?
          <Button variant="danger">Eliminar</Button>:
          <div className="box-container">
            <button disabled={candidate.flag===false || !candidate.resume || !candidate.photoSettings || lastApply} onClick={applyInternship} className="btn rdjf">Aplicar</button>
            {candidate.flag===false ? "":candidate.resume && candidate.photoSettings? "":<p>Necesitas agregar tu CV y una foto de ti antes de aplicar a una pasantía.</p> }
            {lastApply ? <p>Ya has aplicado a esta pasantia.</p>:""}
          </div>}</div>

    </div>: ""}
    <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Formulario enviado</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          Datos guardados correctamente.{' '}
          <img src={gifTenor} alt='' width={100} />
        </div>
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
export default SingleInternshipPage;
