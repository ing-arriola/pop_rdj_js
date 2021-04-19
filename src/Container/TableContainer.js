import React,{useState,useEffect} from 'react'
import {useAuth0} from '@auth0/auth0-react'
import axios from 'axios'
import {Table,Modal,Button} from 'react-bootstrap'
import SurveyContainer from './SurveyContainer'
import logoRdf from "../Resources/logo_rjf.png"
import gifTenor from "../Resources/tenor.gif";
import Calendar from '../Components/Calendar'

const TableContainer = () => {
  const {user} = useAuth0()
  const [show, setShow] = useState(false)
  const [confirm,setConfirm] = useState(false)
  const [dataModal,setDataModal] = useState(
    { company:"",
      userToEvaluate:"",
      typeOfPerson:""
    }
  )
  const [companies,setCompanies] = useState([])
  const [data,setData] = useState([])

  

  useEffect(() => {
    const dataFromFirebase = axios.create({baseURL: process.env.REACT_APP_FIREBASE_URL})
    dataFromFirebase.get('/users.json')
    .then(response => {
      setData(response.data)
    })
    dataFromFirebase.get('/companies.json')
    .then(response => {
      setCompanies(response.data)
    })
  }, [])


  const showEvaluation = (name,type) => {
    const companyToShow = companies.find(element => element.id === parseInt(user.name))
    setDataModal({
      userToEvaluate:name,
      company:companyToShow.name,
      typeOfPerson:type
    })
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
    { data.filter(info => info.company.includes(parseInt(user.name))).map(person  => (
         <tr>
         <td className="text-center">{person.name}</td>
         <td className="d-flex justify-content-center"> 
          <Button
                  variant="primary"
                  onClick={()=>showEvaluation(person.name,person.type)}
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
          
          
            <h4 className="mb-3">Por favor sigue estos sencillos pasos:</h4>
            <div className="w-75 mb-4 h4">   
              <ol >
                <li><strong>Establece la fecha a evaluar:</strong> Para esto, puedes navegar con las fechas en el calendario para establecer 
                el mes a evaluar y luego debes dar  click en el calendario sobre la semana que deseas evaluar</li>
                <div className="d-flex justify-content-center">
                  <Calendar/>
                </div>
                <li> <strong>Selecciona persona a evaluar:</strong>  En el siguiente listado, por favor da click en el boton correspondiente al pasante que deseas evaluar</li>
              </ol>
            </div>


         
          
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
                <SurveyContainer hideModal={hideFormShowConfirm} nameToShow={dataModal.userToEvaluate} company={dataModal.company} typeOfPerson={dataModal.typeOfPerson} />
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
