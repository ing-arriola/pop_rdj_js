import React, {useEffect, useState} from "react";
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import ModalResults from "../Components/ModalResults";
import {db} from "../utils/firebase";
import { withRouter } from "react-router-dom";
import Calendar from "../Components/Calendar";
import moment from "moment";

const usersData = [];

const SingleResultContainer = (props) => {
    const [selectedDays,setSelectedDays] = useState([])
    const [arrayUsers, setUsers] = useState([]);
    const [arrayAws, setAws] = useState([]);
    const [userTable, setUserTable] = useState([]);
    const [questions,setQuestions] = useState([])
    const [modalShow, setModalShow] = useState(false);
    const [company, setCompany] = useState({})
    const [awsToShow, setAwsToShow] = useState({})
    const [userId, setId] = useState(0);

    const getToFirebase = (ref) => {
        db.ref(ref).on("value", snapshot => {
            const response = snapshot.val();
            switch (ref){
                case 'answers':
                    const auxAws = [];
                    for (let key in response){
                        auxAws.push(response[key])
                    }
                    console.log(auxAws)
                    setAwsToShow(auxAws.filter((data) => data.iduser === userId.id));
                    setAws(auxAws);
                    break
                case 'companies':
                    response.forEach((company) => {
                        if (String(company.id) === props.history.location.pathname.substr(9)){
                            setCompany(company)
                        }
                    })
                    break
                case 'users':
                    setUsers(response)
                    usersData.push(response);
                    break
                default:
                    console.log(response)
                    setQuestions(questions);
                    break

            }
        },(error) => console.log(error))
    }

    const getQuestions = () => {
        db.ref("questions").on("value", snapshot => {
            const questions = snapshot.val()
            setQuestions(questions);
        }, (error) => console.log(error))
    }



    useEffect(() => {
        getQuestions()
        getToFirebase('companies')
        getToFirebase('users')
        getToFirebase('answers')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(()=>{
        if(selectedDays.length > 0){
            const validAnswers = []
            arrayUsers.forEach(validUser => {
                let validAnswer= undefined
                arrayAws.forEach(answer => {
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
                    const user = arrayUsers.find((data) => (data.id === item.userId && data.company.includes(Number(props.history.location.pathname.substr(9)))))
                    if (user){
                        usersToBlock.push(user)
                    }
                }
            })
            setUserTable(usersToBlock)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[selectedDays,arrayAws])

    return (
        <>
            <div className="container">
               <div className="d-flex justify-content-between p-5">
                   <Link to="/results">
                       <Button
                           variant="primary"
                           style={{
                               backgroundColor: "#FE3E00",
                               borderBlockColor: "#FE3E00",
                               boxShadow: "#FE3E00",
                               borderBottomColor: "#FE3E00",
                               borderColor: "#FE3E00",
                           }}
                       >
                           Regresar
                       </Button>
                   </Link>
                   <h3>Resultados de {company.name ? company.name : '...' }</h3>
               </div>
                <div className='d-flex flex-column align-items-center'>
                    <h4 className="mb-3">Por favor sigue estos sencillos pasos:</h4>
                    <div className="w-75 mb-4 h4">
                        <ol >
                            <li><strong>Establece la fecha de la gusta ver la evaluacion:</strong> Para esto, puedes navegar con las fechas en el calendario para establecer
                                el mes a ver y luego debes dar  click en el calendario sobre la semana que deseas ver</li>
                            <div className="d-flex justify-content-center">
                                <Calendar selectedDays={selectedDays} setSelectedDays={setSelectedDays} />
                            </div>
                            <li> <strong>Selecciona persona a ver su resultado:</strong>  En el siguiente listado, por favor da click en el boton correspondiente al pasante que deseas ver</li>
                        </ol>
                        <div className="d-flex justify-content-center">
                            {selectedDays.length === 7 ? (
                                    <h4 className="bg-success text-white rounded px-4" >
                                        <strong>Estas viendo las evaluaciones de la semana:</strong>
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
                    {userTable.length === 0 ? <h4>No hay evaluaciones en la fecha seleccionada</h4> :
                    <div className='w-100'>
                        <Table striped bordered hover className=" mb-5">
                            <thead>
                            <tr>
                                <th className="text-center d-flex justify-content-around align-items-center">
                                    <div>Nombre</div>
                                </th>
                                <th className="text-center">Accion</th>
                            </tr>
                            </thead>
                            <tbody>
                            {userTable.map((user, key) => (
                                <tr key={key}>
                                    <td className="text-center">{user.name}</td>
                                    <td className="d-flex justify-content-center">
                                        <Button
                                            variant="primary"
                                            onClick={() => {
                                                setModalShow(true);
                                                setId(user)
                                            }}
                                            style={{
                                                backgroundColor: "#FE3E00",
                                                borderBlockColor: "#FE3E00",
                                                boxShadow: "#FE3E00",
                                                borderBottomColor: "#FE3E00",
                                                borderColor: "#FE3E00",
                                            }}
                                            key={key}
                                        >
                                            Ver
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </div>}
                </div>
                <ModalResults
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    iduser={userId}
                    questions={questions.filter((data) => data.userType.includes(userId.type))}
                    aws={awsToShow}
                />
            </div>
        </>
    );
};

export default withRouter(SingleResultContainer);
