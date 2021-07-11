import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import firebaseConfig, { auth } from '../utils/firebase';


const AdminSettings = () => {
  const [disableSave, setDisableSave] = React.useState(true);
  const [registerOn, setRegisterOn] = React.useState(null);
  const [stateRegister, setStateRegister] = React.useState(null);

  useEffect(() => {
    const bdRef = firebaseConfig.database();
    bdRef.ref('systemSettings').on('value', snapshot => {
      const config = snapshot.val();
      setStateRegister(config.register);
      console.log(config.register);
    }, (error) => console.log(error));
  }, []);
  const saveSettings = () => {
    const bdRef = firebaseConfig.database();
    bdRef.ref('systemSettings')
      .update({
        register: registerOn
      })
      .then(() => {
        console.log('Data updated.');
        setDisableSave(true);
      });

    console.log(registerOn);
  };
  return (
    <>
      <div>
        <Container className='pt-4'>
          <h3>Configuraciones</h3>
          <hr />
          <div className='options'>
            <div className='d-flex justify-content-between'>
              <h5>Disponibilidad del registro para pasantes: </h5>
              <label className='mr-sm-2 sr-only' htmlFor='inlineFormCustomSelect'>Opciones</label>
              {stateRegister ?
                <select defaultValue={stateRegister} className='custom-select mr-sm-2' style={{ width: '160px' }}
                        id='inlineFormCustomSelect' onChange={(e) => {
                  setRegisterOn(e.target.value);
                  setDisableSave(false);
                }}>
                  <option value='true'>Activo</option>
                  <option value='false'>Desactivado</option>
                </select> : ''
              }
            </div>
            <hr />
            <button onClick={saveSettings} className='btn btn-lg btn-block hero-button float-right rdjf'
                    disabled={disableSave} style={{ width: '100px' }}>Guardar
            </button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AdminSettings;
