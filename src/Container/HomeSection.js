import React from "react";
import {Button, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import imgLop from "../Resources/undraw_investment_data_yfvt.svg";
import imtAbout from "../Resources/undraw_Business_decisions_re_84ag.svg";
import imtOurMission from "../Resources/undraw_Social_ideas_re_j5v4.svg";
import Mode from "../Resources/undraw_working_remotely_jh40.svg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
export default function HomeSection() {
    return (
        <div>
            <Container fluid className="mt-5 mb-5 pb-5 pt-5">
                <Row>
                    <div className="col-md-5 d-flex flex-column align-items-center justify-content-center m-4 m-auto">
                        <h1 className="text-center">
                            Programa de oportunidades profesionales
                        </h1>
                        <p>
                            La Red de Jóvenes del Futuro presenta el programa de pasantías titulado Programa de
                            Oportunidades Profesionales (POP) el cual, busca dar respuesta a la falta de oportunidades y
                            experiencia laboral a jóvenes con estudios superiores de El Salvador. Apostando a la
                            reducción de desigualdades, fomentando el trabajo decente y crecimiento económico en el país
                        </p>
                        <Link to={"/signup"} style={{width: 300}}>
                            <Button className="btn btn-lg btn-block " style={{
                                backgroundColor: "#F9A826",
                                borderBlockColor: "#F9A826",
                                boxShadow: "#F9A826",
                                borderBottomColor: "#F9A826",
                                borderColor: "#F9A826"
                            }}>
                                Unirme
                            </Button>
                        </Link>
                        {/*<p>
              ¿Ya tienes cuenta?<Link> Iniciar Sesion</Link>
            </p>*/}
                    </div>
                    <div className="col-md-5 m-auto">
                        <img
                            src={imgLop}
                            width={700}
                            data-aos="zoom-in-left"
                            className="p-3 img-fluid"
                            alt="Responsive image"
                        />
                    </div>
                </Row>
            </Container>

            <Container className="pt-5 mb-5 pb-5">
                <Row>
                    <div className="col-sm d-flex flex-column align-items-center justify-content-center">
                        <h1>¿Quiénes puede participar?</h1>
                        <p>
                            Estudiantes, egresados y graduados de comunicaciones, periodismo, publicidad, diseño
                            gráfico, relaciones públicas, psicología, idiomas, administración de empresas turísticas y
                            salud.
                        </p>
                        <a href="https://rdjfuturo.netlify.app/about/" target="_blank">
                            Leer mas
                        </a>
                    </div>
                    <div className="col-sm">
                        <img
                            src={imtAbout}
                            width={450}
                            data-aos="zoom-in-right"
                            className="img-fluid"
                            alt="Responsive image"
                        />
                    </div>
                </Row>
            </Container>
            <Container className="pt-5 mb-5 pb-5">
                <Row>
                    <div className="col-sm order-md-2 d-flex flex-column align-items-center justify-content-center">
                        <h1>¿Cuáles son los beneficios?</h1>
                        <p>
                            Podrás poner en práctica tu conocimiento, competencias y habilidades. Además adquirirás
                            experiencia laboral, competencias profesionales y al finalizar tu pasantía, recibirás carta
                            de recomendación y diploma de participación del Programa de Oportunidades Profesionales.
                        </p>
                        <a href="https://rdjfuturo.netlify.app/about/" target="_blank">
                            Leer mas
                        </a>
                    </div>
                    <div className="col-sm order-md-1" >
                        <img
                            src={imtOurMission}
                            width={450}
                            data-aos="zoom-in-left"
                            className="img-fluid"
                            alt="Responsive image"
                        />
                    </div>
                </Row>
                <Row className="pt-5">
                    <div className="col-sm d-flex flex-column align-items-center justify-content-center">
                        <h1>Modalidades</h1>
                        <ul>
                            <li>Pasantías virtuales</li>
                            <li>La cual podrás realizar de forma remota desde tu hogar.</li>
                            <li>Pasantías presenciales</li>
                            <li>Asistiendo a las instalaciones de instituciones públicas, privadas y no gubernamentales.
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm order-md-1">
                        <img
                            src={Mode}
                            width={450}
                            className="img-fluid data"
                            data-aos="zoom-in-right"
                            alt="Responsive image"
                        />
                    </div>
                </Row>
            </Container>
        </div>
    );
}
