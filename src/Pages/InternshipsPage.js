import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { auth, db } from '../utils/firebase';


const InternshipsPage = (props) => {
  const [internships, setInternships] = useState([]);
  const [currentUserData, setCurrentUserData] = useState({});

  useEffect(() => {
    db.ref('internships').on('value', data => {
      const internships = data.val();
      const setOportinities = [];
      for (let intern of Object.keys(internships)) {
        internships[intern].id = intern;
        setOportinities.push(internships[intern]);
      }
      checkRol();
      setOportinities.reverse();
      setInternships(setOportinities);
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
  return (
    <>
      <Container>
        <h2 className='text-center'>Crear pasantias</h2>
        <div style={{ height: '35px' }}>
          {currentUserData.rol === 'admin' && <Link to='internships/new'>
            <button className='btn rdjf float-right'>Agregar</button>
          </Link>}
        </div>
        <hr />
        {internships.map(intern => (
          <Card className='mb-4'>
            <Card.Header>{intern.modality}</Card.Header>
            <Card.Body className='d-flex justify-content-between'>
              <div>
                <Card.Title>{intern.name}</Card.Title>
                <Card.Text>
                  <h6>{intern.institution.label}</h6>
                  <p>Duracion de {intern.duration} meses.</p>
                </Card.Text>
              </div>
              <Link to={`internships/${intern.id}`}>
                <Button style={{
                  height: '38px',
                  alignSelf: 'flex-end'
                }} variant='primary'>Ver mas</Button>
              </Link>

            </Card.Body>
          </Card>
        ))}

      </Container>
    </>
  );
};

export default (InternshipsPage);

