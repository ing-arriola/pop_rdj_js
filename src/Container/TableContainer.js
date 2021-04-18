import React,{useState,useEffect} from 'react'
import {useAuth0} from '@auth0/auth0-react'
import {Table,Modal,Button} from 'react-bootstrap'
import SurveyContainer from './SurveyContainer'
import logoRdf from "../Resources/logo_rjf.png"
import data from "./users.json"

import companies from "./companies.json"
import gifTenor from "../Resources/tenor.gif";

const TableContainer = () => {
  const {user} = useAuth0()
  const [show, setShow] = useState(false)
  const [confirm,setConfirm] = useState(false)
  const [userToEvaluate,setUserToEvaluate] = useState ("")
  const [company,setCompany] = useState("")

  useEffect(() => {    
    const companyToShow = companies.companies.find(element => element.id === user.name)
    setCompany(companyToShow.name)
  }, [user.name])

  const showEvaluation = (name) => {
    setUserToEvaluate(name)
    setShow(true)
  }

  const tableToRender=(
    <Table striped bordered hover className="w-75">
  <thead>
    <tr>
      <th className="text-center">Nombre</th>
      <th className="text-center" >Accion</th>
    </tr>
  </thead>
  <tbody>
    { data.users.filter(info => info.company.includes(user.name)).map(person  => (
         <tr>
         <td className="text-center">{person.name}</td>
         <td className="d-flex justify-content-center"> 
          <Button
                  variant="primary"
                  onClick={()=>showEvaluation(person.name)}
                  style={{
                    backgroundColor: "#FE3E00",
                    borderBlockColor: "#FE3E00",
                    boxShadow: "#FE3E00",
                    borderBottomColor: "#FE3E00",
                    borderColor: "#FE3E00",
                  }}
                >
                  Evaluar
                </Button>
         </td>
       </tr>
    ))}
  </tbody>
</Table>
)

  const hideFormShowConfirm = () => {
    setShow(false)
    setConfirm(true)
  } 

    return (
        <div className="d-flex align-items-center container-fluid min-vh-100 mt-5 flex-column" >
          <img
            src={logoRdf}
            width={350}
            className="p-3 img-fluid"
            alt="RDF Logo"
          />
          <h1 className="mb-4" > Bienvenido a la evaluacion de pasantes </h1>
          <h4 className="text-center w-75 mb-4"  >A continuacion podra ver un listado de los pasantes que colaboran en su institucion, para 
              proceder a evaluarlos, por favor haga click en el boton correspondiente al pasante que desea evaluar
          </h4>
           {tableToRender} 
           <Modal
            show={show}
            onHide={()=>{setShow(false)}}
            aria-labelledby="contained-modal-title-vcenter"
            size="xl"
            centered
            >
              <Modal.Header closeButton>
                <Modal.Title>Evaluar a pasante</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <SurveyContainer hideModal={hideFormShowConfirm} nameToShow={userToEvaluate} company={company} />
              </Modal.Body>
             
            </Modal>

            <Modal
              show={confirm}
              onHide={()=>{setConfirm(false)}}
              aria-labelledby="contained-modal-title-vcenter"
              centered>
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
                  onClick={()=>{setConfirm(false)}}
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
        </div>
    )
}

export default TableContainer
