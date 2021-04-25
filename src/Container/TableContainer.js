import React,{useState,useEffect} from 'react'
import firebaseConfig, {auth, db} from '../utils/firebase'
import moment from 'moment'
import {Table,Modal,Button} from 'react-bootstrap'
import SurveyContainer from './SurveyContainer'
import logoRdf from "../Resources/logo_rjf.png"
import gifTenor from "../Resources/tenor.gif"
import Calendar from '../Components/Calendar'
import SvgWithMessage from '../Components/SvgWithMessage'
import { ReactComponent as Empty } from './empty.svg'
import firebase from "firebase";

const TableContainer = () => {
    const [show, setShow] = useState(false)
    const [showEmpty,setShowEmpty] = useState(false)
    const [confirm,setConfirm] = useState(false)
    const [usersAlreadyEvaluated,setUsersAlreadyEvaluated] = useState([])
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
    const [answers,setAnswers] = useState([])
    const [validUsersForcurrentUser,serValidUsersForcurrentUser] = useState([])


    useEffect(() => {
        writeFirebaseData("companies")
        writeFirebaseData("users")
        writeFirebaseData("answers")
    }, [])

    const writeFirebaseData = (refTable) => {
        const userRef= firebaseConfig.database().ref(refTable)
        userRef.on('value', (snapshot) => {
            const usersFirebase= snapshot.val()
            const dataList = []
            for(let id in usersFirebase){
                dataList.push({ id , ...usersFirebase[id]})
            }
            switch (refTable){
                case 'users':
                    setData(dataList)
                    break
                case 'companies':
                    setCompanies(dataList)
                    break
                default:
                    setAnswers(dataList)

            }
        })
    }

    useEffect(()=>{
        if(selectedDays.length > 0){
            const validAnswers = []
            validUsersForcurrentUser.forEach(validUser => {
                let validAnswer= undefined
                answers.forEach(answer => {
                    if(answer.userId === validUser.id){
                        validAnswer =   answer
                    }
                })
                validAnswer && validAnswers.push(validAnswer)
            })
            const usersToBlock = []
            validAnswers.forEach(item => {
                if (item.weekToEvaluate[0] === moment(selectedDays[1]).format('LL') &&
                    item.weekToEvaluate[1] === moment(selectedDays[5]).format('LL') ) {
                    usersToBlock.push(item.userId)
                }
            })
            console.log(usersToBlock)
            setUsersAlreadyEvaluated(usersToBlock)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[selectedDays,answers])

    useEffect(()=>{
        const validUsers = data.filter( userEvaluated => userEvaluated.company.includes(''))
        console.log(validUsers)
        serValidUsersForcurrentUser(validUsers)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data])

    useEffect(() => {
        db.ref("auth").on("value", snapshot => {
            const authUsers = snapshot.val();
            const currentUser = authUsers.filter((user) => user.email === auth.currentUser.email);
            console.log(currentUser);
        }, (error) => console.log(error));
    }, [])
    const showEvaluation = (name,type,id) => {
        if (selectedDays.length === 7) {
            const companyToShow = companies.find(element => element.id === parseInt(''))
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
            { validUsersForcurrentUser.map(person  => (
                <tr>
                    <td className="text-center">{person.name}</td>
                    <td className="d-flex justify-content-center">
                        {usersAlreadyEvaluated.includes(person.id) ?
                            (<div>Ya se evaluo</div>)
                            : (
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
                            )
                        }

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
                        weekToEvaluate={[moment(selectedDays[1]).format('LL') ,moment(selectedDays[5]).format('LL')]}
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