import { Modal, Button, Table } from 'react-bootstrap';
import React from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';


function ModalResults(props) {
  return (
    <Modal
      {...props}
      size='xl'
      centered
      animation={false}
    >

      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          {props.iduser.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex justify-content-between pb-3'>
          <h4>Resultados</h4>
          <ReactHTMLTableToExcel
            id='test-xls-button'
            className='btn btn-success'
            table='result-id'
            filename={props.iduser.name + ' ' + props.aws.weekToEvaluate}
            sheet='tablexls'
            buttonText='Exportar como Excel' />
        </div>
        <Table id='result-id' striped bordered hover className=' mb-5'>
          <thead>
          <tr style={{
            position: 'absolute',
            top: '-9999px',
            left: '-9999px'
          }}>
            <th className='text-center'>{props.iduser.name}</th>
            <th className='text-center'>{props.aws.weekToEvaluate}</th>
          </tr>
          <tr>
            <th className='text-center d-flex justify-content-around align-items-center'>
              <div>Preguntas</div>
            </th>
            <th className='text-center'>Respuestas</th>

          </tr>
          </thead>
          <tbody>
          {props.questions.map((question, keyData) => (
            <tr key={keyData}>
              <td className='text-center'>{question.text}</td>
              <td className='text-center'>{props.aws['question' + (keyData)].toString()}</td>
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
