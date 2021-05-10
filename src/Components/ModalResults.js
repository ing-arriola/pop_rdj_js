import {Modal, Button, Table } from "react-bootstrap";
import React from "react";


function ModalResults(props) {
    return (
        <Modal
            {...props}
            size="xl"
            centered
            animation={false}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.iduser.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex justify-content-between pb-3">
                    <h4>Resultados</h4>
                </div>
                <Table striped bordered hover className=" mb-5">
                    <thead>
                    <tr>
                        <th className="text-center d-flex justify-content-around align-items-center">
                            <div>Preguntas</div>
                        </th>
                        <th className="text-center">Respuestas</th>

                    </tr>
                    </thead>
                    <tbody>
                    {props.questions.map((question, keyData) => (
                        <tr key={keyData}>
                            <td className="text-center">{question.text}</td>
                            <td className="text-center">{props.aws["question"+(keyData)].toString()}</td>
                        </tr>
                    ))}

                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default ModalResults;
