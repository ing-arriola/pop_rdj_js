import React from 'react'
import { Form, FormCheck  } from "react-bootstrap";
const Question = ({questionText,index,handleAnswer,type}) => {
    return (
        <Form.Group className="d-flex flex-column"  controlId="formName" onChange={handleAnswer} >
            <Form.Label className="h3 text-justify mb-3" >{questionText}</Form.Label>
            {type !== "label" && (
                <>
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
                </>
            )
            }
        </Form.Group>
    )
}

export default Question
