import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgLop from "../Resources/hero_section.svg";
import imtAbout from "../Resources/participants.svg";
import imtOurMission from "../Resources/benefit.svg";
import Mode from "../Resources/kinda.svg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
export default function HomeSection() {
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
          <div className="col-sm d-flex flex-column align-items-center justify-content-center">
            <h2 className="sub-title">¿Quiénes puede participar?</h2>
            <p className="lead">
              Estudiantes, egresados y graduados de comunicaciones, periodismo,
              publicidad, diseño gráfico, relaciones públicas, psicología,
              idiomas, administración de empresas turísticas y salud.
            </p>
          </div>
          <div className="col-sm ">
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
            <h2 className="sub-title">¿Cuáles son los beneficios?</h2>
            <p className="lead">
              Podrás poner en práctica tu conocimiento, competencias y
              habilidades. Además adquirirás experiencia laboral, competencias
              profesionales y al finalizar tu pasantía, recibirás carta de
              recomendación y diploma de participación del Programa de
              Oportunidades Profesionales.
            </p>
          </div>
          <div className="col-sm order-md-1">
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
            <h2 className="sub-title">Modalidades</h2>
            <ul className="lead">
              <li>
                <strong> Pasantías virtuales:</strong> La cual podrás realizar
                de forma remota desde tu hogar
              </li>

              <li>
                <strong> Pasantías presenciales:</strong> Asistiendo a las
                instalaciones de instituciones públicas, privadas y no
                gubernamentales.
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
