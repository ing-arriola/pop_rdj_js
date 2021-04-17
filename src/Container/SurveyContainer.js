import React, { useState } from "react";
import { Form, Button } from "react-bootstrap"
//import {useAuth0} from '@auth0/auth0-react'
import Question from '../Components/Question'
import data from "./questions.json"

const SurveyContainer= ({hideModal,nameToShow,company}) => {
  
  const [newAnswer, setNewAnswer] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
    question10: "",
  })

  const {question9,question10} = newAnswer

  const instructions = `En los siguientes ítems, favor calificar según considere conveniente 
  a ${nameToShow} en el desempeño de sus actividades como pasante en la institución ${company}`

  const openQuestion = (index,questionText) =>  {
    let question
    if (index === 9) {
        question = (
          <Form.Group className="d-flex flex-column survey-question p-3 rounded">
            <Form.Label className=" h3 text-center mb-3" >{questionText}</Form.Label>
              <Form.Control
                  as="textarea"
                  name="question9"
                  value={question9}
                  rows={4}
                  onChange={handleOpenQuestion}
                  required
              />
          </Form.Group>
        )
    }else{
        question = (
          <Form.Group className="d-flex flex-column survey-question p-3 rounded">
            <Form.Label className=" h3 text-center mb-3" >{questionText}</Form.Label>
              <Form.Control
                  as="textarea"
                  name="question10"
                  value={question10}
                  rows={4}
                  onChange={handleOpenQuestion}
                  required
              />
          </Form.Group>
        )
    }
    return question
  }

  const handleAnswer = (e) => {
    setNewAnswer({ ...newAnswer, [e.target.name]: e.target.id })
  }

  const handleOpenQuestion = (e) => {
    console.log(e.target.value)
    console.log(e.target.name)
    setNewAnswer({ ...newAnswer, [e.target.name]: e.target.value })
  }
  
  const sendData = (e) => {
    e.preventDefault()
    hideModal()
    //here you just need to send this the newUser Object
    console.log(newAnswer);
  }

  return (
    <div className="d-flex flex-column align-items-center mt-5  justify-content-center" >
      <p className="h3 d-flex text-center mx-4 ">
        {instructions}
      </p>
      <p className="h3 d-flex text-center mx-4">
      Recuerde tener en cuenta que en la escala del 1 al 5, a mayor puntaje mejor es el desempeño que mostró el pasante. 
      </p>
        <Form className="survey-form-container my-5 p-5" onSubmit={sendData}>
          {
            data.questions.map((question,index) => (
              question.type === "closed" || question.type === "label"   ? (
                <Question 
                  questionText={question.text} 
                  index={index} 
                  type={question.type} 
                  handleAnswer={handleAnswer} 
                />
              ): openQuestion(index,question.text)
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
        
    </div>
  );
};

export default SurveyContainer
