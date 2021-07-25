import React, { useState } from 'react';
import { Alert, Button, Container, Form, Modal } from 'react-bootstrap';
import gifTenor from '../Resources/tenor.gif';
import { Link } from 'react-router-dom';
import AvatarEditor from 'react-avatar-editor';
import { auth, db } from '../utils/firebase';

const DashboardUser = () => {
  const [show, setShow] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [errorFile, setErrorFile] = useState(false);
  const [errorFileProfile, setErrorFileProfile] = useState(false);
  const [positionPhoto, setPositionPhoto] = useState({ x: 0.5, y: 0.5 });
  const [isFilePicked, setIsFilePicked] = useState();
  const [authUser, setUser] = React.useState(null);
  const [currentKey, setCurrentKey] = React.useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newUser, setNewUser] = useState({
    name: '',
    lastname: '',
    age: '',
    location: '',
    phone: '',
    phone2: '',
    password: '',
    email: '',
    education: '',
    profession: '',
    about: ''
  });

  React.useEffect(() => {
    db.ref('candidates').on('value', snapshot => {
      const authUsers = snapshot.val();
      let currentUser = undefined;
      if (authUsers) {
        let claves = Object.keys(authUsers);
        for (let i = 0; i < claves.length; i++) {
          let clave = claves[i];
          if (authUsers[clave].email === auth.currentUser.email) {
            currentUser = authUsers[clave];
            currentUser.password = '';
            setNewUser(currentUser);
            setCurrentKey(clave);
            newUser.password = '';
          }
        }
      }
      setUser(currentUser);
    }, (error) => console.log(error));
  }, []);


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
    about
  } = newUser;

  const onChange = (e) =>
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  const changeHandler = async (event) => {
    const file = event.target.files[0];
    const extBasic = event.target.value.substr(event.target.value.length - 4);
    const extComplex = event.target.value.substr(event.target.value.length - 5);
    if (extBasic === '.jpg' || extBasic === '.png' || extComplex === '.jpeg') {
      setErrorFileProfile(false);
      setIsFilePicked(await toBase64(file));
    } else {
      setErrorFileProfile(true);
    }
  };
  const changeHandlerPDF = async (event) => {
    const file = event.target.files[0];
    const validExt = '.pdf';
    const ext = event.target.value.substr(event.target.value.length - 4);
    if (ext === validExt) {
      setErrorFile(false);
      setSelectedFile(await toBase64(file));
    } else {
      setErrorFile(true);
    }
  };
  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
  const saveNewData = (e) => {
    e.preventDefault();
    if (isFilePicked) {
      newUser.imageURL = isFilePicked;
      newUser.photoSettings = positionPhoto;

    }
    if (selectedFile) {
      newUser.resume = selectedFile;

    }
    const todoRef = db.ref('candidates').child(String(currentKey));
    todoRef.update(newUser).then(() => handleShow()).catch((error) => alert('error'));
  };
  return (<>
    <Container>
      <h1 className='text-center'>Panel de configuracion</h1>
      <div className='d-flex justify-content-around align-content-center pt-4 flex-wrap'>
        {newUser.photoSettings && (<div style={{ width: '250px' }}>
          <div className='photoProfile  mb-4'>
            <img src={newUser.imageURL} style={{
              width: '250px',
              position: 'absolute',
              bottom: (-((50 - (newUser.photoSettings.y * 100)) / 50) * 100) + '%'
            }} alt='' />
          </div>
        </div>)}
        {newUser.resume && (<div style={{ width: '250px' }}>
          <div>
            <embed src={newUser.resume} style={{ width: '250xp', height: '250px' }} />
            <p className='text-center'>Curriculum Vitae (CV).</p>
          </div>
        </div>)}
      </div>
      <Form className='px-5' onSubmit={saveNewData}>

        <Form.Group controlId='formCv' className='pt-3'>
          <Form.Label>Imagen de Perfil</Form.Label>
          <Form.Control
            name='photo'
            type='file'
            onChange={changeHandler}
            required={!newUser.imageURL}
          />
        </Form.Group>
        {isFilePicked ? <div className='pickersContainer'>
          <AvatarEditor image={isFilePicked} width={250}
                        height={250}
                        border={10}
                        borderRadius={100}
                        rotate={0} scale={1} onPositionChange={(e) => {
            setPositionPhoto(e);
          }} />

        </div> : errorFileProfile && (<Alert key={1} variant={'danger'}>
          El formato de la imagen es invalido, solo se admite JPG/JPEG y PNG.
        </Alert>)}

        <hr />
        <Form.Group controlId='formCv' className='pt-3'>
          <Form.Label>Agregar CV (PDF)</Form.Label>
          <Form.Control
            name='resume'
            type='file'
            onChange={changeHandlerPDF}
            required={!newUser.resume}
          />
        </Form.Group>
        {selectedFile ? <div className='pickersContainer'>
          <div>
            <embed src={selectedFile} style={{ width: 'auto' }} />
            <p className='text-center'>Vista previa.</p></div>
        </div> : errorFile && (<Alert key={1} variant={'danger'}>
          El formato de el documento es invalido.
        </Alert>)}

        <hr />
        <Form.Group controlId='formName'>
          <Form.Label>Nombres</Form.Label>
          <Form.Control
            name='name'
            value={name}
            type='text'
            placeholder='Escribe tus nombres'
            onChange={onChange}
            required
          />
        </Form.Group>
        <Form.Group controlId='formLastname'>
          <Form.Label>Apellidos</Form.Label>
          <Form.Control
            name='lastname'
            value={lastname}
            type='text'
            placeholder='Escribe tus apellidos'
            onChange={onChange}
            required
          />
        </Form.Group>
        <Form.Group controlId='formage'>
          <Form.Label>Edad</Form.Label>
          <Form.Control
            name='age'
            value={age}
            type='text'
            placeholder='Ingresa tu edad'
            onChange={onChange}
            required
          />
        </Form.Group>
        <Form.Group controlId='formLocation'>
          <Form.Label>Departamento de residencia</Form.Label>
          <Form.Control
            as='select'
            name='location'
            value={location}
            onChange={onChange}
            required
          >
            <option value='' selected hidden>
              Selecciona tu departamento
            </option>
            <option value='Ahuchapan'>Ahuchapán</option>
            <option value='Cabañas'>Cabañas</option>
            <option value='Chalatenango'>Chalatenango</option>
            <option value='Cuscatlan'>Cuscatlan</option>
            <option value='La Libertad'>La Libertad</option>
            <option value='La Paz'>La Paz</option>
            <option value='La Union'>La Unión</option>
            <option value='Morazan'>Morazan</option>
            <option value='Santa Ana'>Santa Ana</option>
            <option value='San Salvador'>San Salvador</option>
            <option value='San Miguel'>San Miguel</option>
            <option value='San Vicente'>San Vicente</option>
            <option value='Sonsonate'>Sonsonate</option>
            <option value='Usulutan'>Usulutan</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='formPhone'>
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            name='phone'
            value={phone}
            type='number'
            placeholder='Ejemplo:71715555'
            onChange={onChange}
            required
          />
        </Form.Group>
        <Form.Group controlId='formPhone2'>
          <Form.Label>Teléfono secundario</Form.Label>
          <Form.Control
            name='phone2'
            value={phone2}
            type='number'
            placeholder='Ejemplo:71715555'
            onChange={onChange}
            required
          />
          <Form.Text className='text-muted'>
            Telefono de respaldo donde se te contactara si no puedes atenter a
            tu telefono principal
          </Form.Text>
        </Form.Group>
        <Form.Group controlId='formEmail'>
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            name='email'
            disabled={true}
            value={email}
            type='email'
            placeholder='Ejemplo: johndoe@gmail.com'
            onChange={onChange}
            required
          />
          <Form.Text className='text-muted'>
            Utiliza un email con aspecto profesional
          </Form.Text>
        </Form.Group>
        <Form.Group controlId='formEducation'>
          <Form.Label>Respecto a la universidad eres</Form.Label>
          <Form.Control
            name='education'
            as='select'
            value={education}
            onChange={onChange}
            required
          >
            <option value='' selected hidden>
              Elige una opción
            </option>
            <option>Estudiante activo</option>
            <option>Egresado</option>
            <option>Gradudado</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='formProfession'>
          <Form.Label>Selecciona tu área de estudios </Form.Label>
          <Form.Control
            name='profession'
            as='select'
            value={profession}
            onChange={onChange}
            required
          >
            <option value='' selected hidden>
              Selecciona tu área de estudios
            </option>
            <option>Adminstración de empresas turísticas</option>
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

        <Form.Group controlId='formAbout'>
          <Form.Label>
            Cuentanos un poco sobre ti y de tu interes en POP
          </Form.Label>
          <Form.Control
            as='textarea'
            name='about'
            value={about}
            rows={4}
            onChange={onChange}
            required
          />
        </Form.Group>

        <Button
          className='btn btn-lg btn-block btn-form mx-auto'
          variant='primary'
          type='submit'
          style={{
            backgroundColor: '#FE3E00',
            borderBlockColor: '#FE3E00',
            boxShadow: '#FE3E00',
            borderBottomColor: '#FE3E00',
            borderColor: '#FE3E00'
          }}
        >
          Guardar cambios
        </Button>
        <p className='mt-3'>
          ¿Dudas, problemas o sugerencias?
          <p>
            <a
              href='https://rdjfuturo.netlify.app/contactus/'
              target='_blank'
              rel='noreferrer'
            >
              Contactacnos 😁✉️
            </a>
          </p>
        </p>
      </Form>
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
    </Container>
  </>);
};
export default DashboardUser;
