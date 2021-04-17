import React from 'react'
import { Form, FormCheck  } from "react-bootstrap";
const Question = ({questionText,index,handleAnswer,type}) => {
    

  const closedQuestion = (
    <div className="d-flex justify-content-around" onChange={handleAnswer}>
        <FormCheck 
        className="h5"
        type="radio"   
        label="1"
        name={`question${index}`}
        id="1"
        />
        <FormCheck
        className="h5" 
        type="radio"   
        label="2"
        name={`question${index}`}
        id="2"
        />
        <FormCheck 
        className="h5"
        type="radio"  
        required 
        label="3"
        name={`question${index}`}
        id="3"
        />
        <FormCheck 
        className="h5"
        type="radio"   
        label="4"
        name={`question${index}`}
        id="4"
        />
        <FormCheck 
        className="h5"
        type="radio"   
        label="5"
        name={`question${index}`}
        id="5"
        />
    </div>
  )


    return (
        <Form.Group className={`d-flex flex-column ${type !== "label" ? "survey-question p-4 mb-5 rounded" : "survey-label mt-5"}`} onChange={handleAnswer} >
            <Form.Label className=" h3 text-center mb-4" >{questionText}</Form.Label>
            {type !== "label" && closedQuestion }
        </Form.Group>
    )
}

export default Question
