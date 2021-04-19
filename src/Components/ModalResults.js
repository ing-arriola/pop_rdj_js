import {Modal, Button, Table, Form, Pagination} from "react-bootstrap";
import React, {useState} from "react";
import data from "./../Container/questions.json"

const userArray = [
    {
        question1: "1",
        question2: "5",
        question3: "5",
        question4: "4",
        question5: "5",
        question6: "3",
        question7: "3",
        question8: "3",
        question9: "3",
        question10: "prueba 1",
        question0: "4",
        date: "12/12/2020"
    },
    {
        question1: "2",
        question2: "2",
        question3: "3",
        question4: "4",
        question5: "5",
        question6: "3",
        question7: "3",
        question8: "3",
        question9: "3",
        question10: "prueba 1",
        question0: "4",
        date: "12/12/2020"
    },
    {
        question1: "3",
        question2: "5",
        question3: "5",
        question4: "4",
        question5: "5",
        question6: "3",
        question7: "3",
        question8: "3",
        question9: "3",
        question10: "prueba 1",
        question0: "4",
        date: "12/12/2020"
    },
    {
        question1: "4",
        question2: "5",
        question3: "5",
        question4: "4",
        question5: "5",
        question6: "3",
        question7: "3",
        question8: "3",
        question9: "3",
        question10: "prueba 1",
        question0: "4",
        date: "12/12/2020"
    },
]
function ModalResults(props) {
    const [weeks, setWeeks] = useState([1]);
    const [active, setActive] = useState(1);
    const handleWeeks = (e) => {
        const value = e.target.value;
        const weeksCounted = [];
        for (let i = 0; i < value; i++) {
            weeksCounted.push(i);
        }
        setWeeks(weeksCounted);
    }
    const pagination = (n) => {
        const arr  =[];
        for (let i = 0; i < n; i++) {
            arr.push(i)
        }
        return arr;
    }
    const paginationStatus = (e) => {
        const value = e.target.innerText;
        setActive(Number(value[0]));
    }
    return (
        <Modal
            {...props}
            size="xl"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.idUser.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex justify-content-between pb-3">
                    <h4>Resultados</h4>
                    <Form.Control as="select" className="w-25">
                        <option value='1'>1 Semana</option>
                        <option value='2'>2 Semana</option>
                        <option value='3'>3 Semana</option>
                        <option value='4'>4 Semana</option>
                    </Form.Control>
                </div>
                <Table striped bordered hover className=" mb-5">
                    <thead>
                    <tr>
                        <th className="text-center d-flex justify-content-around align-items-center">
                            <div>Nombre</div>
                        </th>
                        {weeks.map((week, key) => (
                            <th className="text-center">Week { key+active}</th>
                        ))
                        }

                    </tr>
                    </thead>
                    <tbody>
                    {data.questions.map((question, keyData) => (
                        <tr>
                            <td className="text-center">{question.text}</td>

                            {weeks.map((week, key) => (
                                <td className="text-center">{userArray[key || active-1]["question"+keyData]}</td>
                            ))
                            }
                        </tr>
                    ))}

                    </tbody>
                </Table>
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    {pagination(Math.ceil(4/weeks.length)).map((data,key) => (
                        <Pagination.Item active={key+1 === active} onClick={paginationStatus}>{key+1}</Pagination.Item>
                    ))}
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default ModalResults;
