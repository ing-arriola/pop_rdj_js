import React, { useState,useEffect } from "react";
import { Form, Button } from "react-bootstrap"
//import {useAuth0} from '@auth0/auth0-react'
// import axios from 'axios'
import Question from '../Components/Question'
import data from "./questions.json"
import firebaseConfig from '../utils/firebase'

const SurveyContainer= ({hideModal,nameToShow,company,typeOfPerson,weekToEvaluate,userId}) => {
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
        weekToEvaluate:"",
        userId:""
    })

    useEffect(() => {
        setNewAnswer({...newAnswer,weekToEvaluate:weekToEvaluate,userId:userId})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    const {question9,question10} = newAnswer

    const openQuestion = (index,questionText) =>  {
        let question
        if (index === 11) {
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
        }else if (index === 12){
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
        setNewAnswer({ ...newAnswer, [e.target.name]: e.target.value })
    }

    const sendData = (e) => {
        e.preventDefault()
        hideModal()
        //here you just need to send this the newUser Object
        console.log(newAnswer);
        /*const dataFirebase = axios.create({baseURL: process.env.REACT_APP_FIREBASE_URL})
        dataFirebase.post('/answers.json', newAnswer)
          .then(res => console.log(res))*/
        const bdRef = firebaseConfig.database().ref('answers')
        bdRef.push(newAnswer)

    }

    return (
        <div className="d-flex flex-column align-items-center mt-5  justify-content-center" >
            <p className="h3  text-justify mx-4 ">
                En los siguientes ítems, favor calificar según considere conveniente
                a <strong>{nameToShow}</strong>  en el desempeño de sus actividades como pasante en la institución <strong>{company}</strong>
            </p>
            <p className="h3 d-flex text-justifyr mx-4">
                Recuerde tener en cuenta que en la escala del 1 al 5, a mayor puntaje mejor es el desempeño que mostró el pasante.
            </p>
            <Form className="survey-form-container my-5 p-5" onSubmit={sendData}>
                {
                    data.questions.map((question,index) => (
                        (question.type === "closed" || question.type === "label")  ? (
                            question.userType.includes(typeOfPerson)  &&  (<Question
                                questionText={question.text}
                                index={index}
                                type={question.type}
                                handleAnswer={handleAnswer}
                            />)
                        ): openQuestion(index,question.text)
                    ))
                }



                <Button
                    className="btn btn-lg btn-block btn-form mx-auto"
                    variant="primary"
                    type="submit"
                    style={{
                        color:"#FFF",
                        backgroundColor: "#FE3E00",
                        borderBlockColor: "#FE3E00",
                        boxShadow: "#FE3E00",
                        borderBottomColor: "#FE3E00",
                        borderColor: "#FE3E00",
                    }}
                >
                    Enviar
                </Button>
            </Form>

        </div>
    );
};

export default SurveyContainer