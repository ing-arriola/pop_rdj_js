import React, { useState } from "react";
import { Form, Button, Modal  } from "react-bootstrap"
import {useAuth0} from '@auth0/auth0-react'
import NotAuth from '../Components/NotAuth'
import Question from '../Components/Question'
import gifTenor from "../Resources/tenor.gif";
import data from "./questions.json"
const SurveyComnainer= () => {
  console.log(data.questions)
  const {isAuthenticated} = useAuth0()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  
  const sendData = (e) => {
    e.preventDefault()
    setShow(true)
    //here you just need to send this the newUser Object
    console.log(e);
  }

  return (
    <div className="d-flex flex-column align-items-center mt-5  justify-content-center" >
      <label className="h3 d-flex text-center">
      En los siguientes ítems, calificar según considere conveniente a [NOMBRE Y APELLIDO] en el desempeño de sus actividades como pasante en la institución [NOMBRE DE INSTITUCIÓN]
      </label>
      {
        isAuthenticated ?
      (
        <>
        <Form className="survey-form-container my-5 w-50 p-5" onSubmit={sendData}>
          {
            data.questions.map((question,index) => (
              <Question questionText={question.text} index={index} type={question.type}/>
            ))
          }
        
          <Button
            className="btn btn-lg btn-block btn-form mx-auto"
            variant="primary"
            type="submit"
            style={{
              color:"#000",
              backgroundColor: "#FFF",
              borderBlockColor: "#FFF",
              boxShadow: "#FFF",
              borderBottomColor: "#FFF",
              borderColor: "#FFF",
            }}
          >
            Enviar
          </Button>
        </Form>
        <Modal
          show={show}
          onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Formulario enviado</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex flex-column justify-content-center align-items-center">
              Hemos recibido tus datos correctamente.{" "}
              <img src={gifTenor} alt="" width={100} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={handleClose}
              style={{
                backgroundColor: "#FE3E00",
                borderBlockColor: "#FE3E00",
                boxShadow: "#FE3E00",
                borderBottomColor: "#FE3E00",
                borderColor: "#FE3E00",
              }}
            >
              Aceptar
            </Button>
          </Modal.Footer>
        </Modal>
        </>
      )
      :
      (
        <NotAuth />
      )
      }
    </div>
  );
};

export default SurveyComnainer
