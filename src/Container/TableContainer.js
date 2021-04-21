import React,{useState,useEffect} from 'react'
import {useAuth0} from '@auth0/auth0-react'
import firebaseConfig from '../utils/firebase'
import moment from 'moment'
import {Table,Modal,Button} from 'react-bootstrap'
import SurveyContainer from './SurveyContainer'
import logoRdf from "../Resources/logo_rjf.png"
import gifTenor from "../Resources/tenor.gif"
import Calendar from '../Components/Calendar'
import SvgWithMessage from '../Components/SvgWithMessage'
import { ReactComponent as Empty } from './empty.svg'

const TableContainer = () => {
  const {user} = useAuth0()
  const [show, setShow] = useState(false)
  const [showEmpty,setShowEmpty] = useState(false)
  const [confirm,setConfirm] = useState(false)
  const [dataModal,setDataModal] = useState(
    { company:"",
      userToEvaluate:"",
      userId:"",
      typeOfPerson:""
    }
  )
  const [selectedDays,setSelectedDays] = useState([])
  const [companies,setCompanies] = useState([])
  const [data,setData] = useState([])
// const [answers,setAnswers] = useState([])

  

  useEffect(() => {
   
    /*const dataFromFirebase = axios.create({baseURL: process.env.REACT_APP_FIREBASE_URL})
    dataFromFirebase.get('/users.json')
    .then(response => {
      setData(response.data)
    })
    dataFromFirebase.get('/companies.json')
    .then(response => {
      setCompanies(response.data)
    })*/

    const companiesRef= firebaseConfig.database().ref('companies')
    companiesRef.on('value', (snapshot) => {
      const companiessFirebase= snapshot.val() 
       const companiesList = []
      for(let id in companiessFirebase){
        companiesList.push(companiessFirebase[id])  
      }
      setCompanies(companiesList)
    })
   
    const userRef= firebaseConfig.database().ref('users')
    userRef.on('value', (snapshot) => {
      const usersFirebase= snapshot.val() 
       const usersList = []
      for(let id in usersFirebase){
        usersList.push(usersFirebase[id])  
      }
      setData(usersList)
    })
  }, [])


  const showEvaluation = (name,type,id) => {
    if (selectedDays.length === 7) {
      const companyToShow = companies.find(element => element.id === parseInt(user.name))
      setDataModal({
        userToEvaluate:name,
        company:companyToShow.name,
        userId:id,
        typeOfPerson:type
      })
      setShow(true)
    }else{
      setShowEmpty(true)
    }
    
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
                  onClick={()=>showEvaluation(person.name,person.type,person.id)}
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
        <div className="d-flex align-items-center container-fluid min-vh-100 mt-5 flex-column">
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
                  <Calendar selectedDays={selectedDays} setSelectedDays={setSelectedDays} />
                </div>
                <li> <strong>Selecciona persona a evaluar:</strong>  En el siguiente listado, por favor da click en el boton correspondiente al pasante que deseas evaluar</li>
              </ol>
              <div className="d-flex justify-content-center">
                {selectedDays.length === 7 ? (
                  <h4 className="bg-success text-white rounded px-4" >
                    <strong>Estas evaluando la semana:</strong>
                    {moment(selectedDays[1]).format('LL')} –{' '}
                    {moment(selectedDays[5]).format('LL')}
                  </h4>
                  ):
                  (
                    <h4 className="font-weight-bold bg-danger text-white rounded px-4" >Aun no has establecido una semana para evaluar</h4>
                  )
                }
              </div>
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
                <SurveyContainer 
                hideModal={hideFormShowConfirm} 
                userId={dataModal.userId}
                nameToShow={dataModal.userToEvaluate} 
                company={dataModal.company} 
                typeOfPerson={dataModal.typeOfPerson}
                weekToEvaluate={[selectedDays[1],selectedDays[5]]}
                />
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
            

            <Modal
            show={showEmpty}
            onHide={()=>{setShowEmpty(false)}}
            aria-labelledby="contained-modal-title-vcenter"
            size="xl"
            centered
            >
              <Modal.Header closeButton>
              </Modal.Header>
              <Modal.Body>
                  <SvgWithMessage Component={Empty} headMessage="Datos incompletos"  message="Opps!! parece que aun no has seleccionado una semana para evaluar" />
              </Modal.Body>
             
            </Modal>

        </div>
    )
}

export default TableContainer
