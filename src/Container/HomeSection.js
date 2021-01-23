import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgLop from "../Resources/hero_section.svg";
import imtAbout from "../Resources/participants.svg";
import imtOurMission from "../Resources/benefit.svg";
import Mode from "../Resources/kinda.svg";
import AOS from "aos";
import { FaRegCheckCircle, FaCheck, FaCheckCircle } from "react-icons/fa";
import "aos/dist/aos.css";

AOS.init();
export default function HomeSection() {
  const listProfessions = [
    "Periodismo",
    "Publicidad",
    "Diseño gráfico",
    "Relaciones públicas",
    "Psicología",
    "Idiomas",
    "Administración de empresas turísticas",
    "Salud",
  ];

  const benefits = [
    "Podrás poner en práctica tu conocimiento, competencias y habilidades",
    "Adquirirás experiencia laboral y competencias profesionales",
    "Al finalizar tu pasantía, recibirás carta de recomendación y diploma de participación del Programa de Oportunidades Profesionales.",
  ];

  const whoCan = listProfessions.map((profession) => (
    <li>
      <FaRegCheckCircle color={"#FE3E00"} /> {profession}
    </li>
  ));

  const popBenefits = benefits.map((benefit) => (
    <li>
      <FaCheck color={"#FE3E00"} /> {benefit}
    </li>
  ));

  return (
    <div>
      <Container fluid className="mt-5 mb-5 pb-5 pt-5">
        <Row>
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center m-4 m-auto">
            <h1 className="text-center heading">
              Programa de oportunidades profesionales (POP)
            </h1>
            <p className=" text-justify lead">
              Este projecto busca dar respuesta a la falta de oportunidades y
              experiencia laboral a jóvenes con estudios superiores de El
              Salvador. Apostando a la reducción de desigualdades, fomentando el
              trabajo decente y crecimiento económico en el país
            </p>
            <Link className="no-undeline" to={"/signup"} style={{ width: 300 }}>
              <Button
                className="btn btn-lg btn-block hero-button"
                style={{
                  backgroundColor: "#FE3E00",
                  borderBlockColor: "#FE3E00",
                  boxShadow: "#FE3E00",
                  borderBottomColor: "#FE3E00",
                  borderColor: "#FE3E00",
                }}
              >
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
          <div className="col-md d-flex flex-column align-items-center justify-content-center">
            <h2 className="sub-title">¿Quiénes puede participar?</h2>
            <p className="lead">
              Estudiantes, egresados y graduados de:
              <ul className="list-unstyled">{whoCan}</ul>
            </p>
          </div>
          <div className="col-md ">
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
      <Container className="mb-5 pb-5">
        <Row>
          <div className="col-md order-md-2 d-flex flex-column align-items-center justify-content-center">
            <h2 className="sub-title">¿Cuáles son los beneficios?</h2>

            <p className="lead">
              <ul className="list-unstyled">{popBenefits}</ul>
            </p>
          </div>
          <div className="col-md order-md-1">
            <img
              src={imtOurMission}
              width={450}
              data-aos="zoom-in-left"
              className="img-fluid"
              alt="Responsive image"
            />
          </div>
        </Row>
        <Row className=" mt-5 pt-5">
          <div className="col-md d-flex flex-column align-items-center justify-content-center">
            <h2 className="sub-title">Modalidades</h2>
            <ul className="lead list-unstyled ">
              <li>
                <FaCheckCircle color={"#FE3E00"} />
                <strong> Pasantías virtuales:</strong> La cual podrás realizar
                de forma remota desde tu hogar
              </li>
              <li>
                <FaCheckCircle color={"#FE3E00"} />
                <strong> Pasantías presenciales:</strong> Asistiendo a las
                instalaciones de instituciones públicas, privadas y no
                gubernamentales.
              </li>
            </ul>
          </div>
          <div className="col-md order-md-1">
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
