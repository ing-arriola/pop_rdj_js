import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { auth, db } from '../utils/firebase';
import { useHistory } from "react-router-dom";

const SingleInternshipPage = () => {
  const [intership, setInternship] = useState(null);
  const [currentUserData, setCurrentUserData] = useState({});

  useEffect(() => {
    db.ref('internships').on('value', data => {
      const internships = data.val();
      const setOportinities = [];
      for (let intern of Object.keys(internships)) {
        const curretnLoc = window.location.pathname.substr(13);
        if (curretnLoc === intern){
          setInternship(internships[intern])
          checkRol();
          console.log(internships[intern]);
        }
      }
      //setInternships(setOptionsCompanies);
    });
  }, []);
  const checkRol = () => {
    db.ref('auth').on('value', snapshot => {
      const authUsers = snapshot.val();
      let currentUser = undefined;
      authUsers.forEach(user => {
        if (user.email === auth.currentUser.email) {
          currentUser = user;
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
      <div className="d-flex justify-content-center">
        {currentUserData.rol==="admin"?
          <Button variant="danger">Eliminar</Button>:
          <button className="btn rdjf">Aplicar</button>}</div>
    </div>: ""}
  </Container>);
}
export default SingleInternshipPage;
