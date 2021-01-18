import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgLop from "../Resources/undraw_investment_data_yfvt.svg";
import imtAbout from "../Resources/undraw_Business_decisions_re_84ag.svg";
import imtOurMission from "../Resources/undraw_Social_ideas_re_j5v4.svg";

export default function HomeSection() {
  return (
    <div>
      <Container className="mt-5 mb-5 pb-5 pt-5">
        <Row>
          <div className="col-md-4 d-flex flex-column align-items-center justify-content-center m-4">
            <h1 className="text-center">
              Programa de oportunidades profesionales
            </h1>
            <Link to={"/signup"} style={{width: 300}}>
                            <Button className="btn btn-primary btn-lg btn-block ">
                                Unirme
                            </Button>
            </Link>
            <p>
              ¿Ya tienes cuenta?<Link> Iniciar Sesion</Link>
            </p>
          </div>
          <div className="col-md-7">
            <img
              src={imgLop}
              width={700}
              className="p-3 img-fluid"
              alt="Responsive image"
            />
          </div>
        </Row>
      </Container>

      <Container className="pt-5 mb-5 pb-5">
        <Row>
          <div className="col-sm d-flex flex-column align-items-center justify-content-center">
            <h1>Sobre nosotros</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
              iste nemo praesentium repellat. Assumenda, harum, veniam? Amet
              consequatur cumque cupiditate minus molestias quaerat voluptatum?
              Accusamus aut hic iste tempore temporibus!
            </p>
            <a href="https://rdjfuturo.netlify.app/about/" target="_blank">
              Leer mas
            </a>
          </div>
          <div className="col-sm">
            <img
              src={imtAbout}
              width={450}
              className="img-fluid"
              alt="Responsive image"
            />
          </div>
        </Row>
      </Container>
      <Container className="pt-5 mb-5 pb-5">
        <Row>
          <div className="col-sm order-md-2 d-flex flex-column align-items-center justify-content-center">
            <h1>Nuestra mision</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              aliquam aliquid consequuntur debitis dolore ducimus eaque eius
              exercitationem ipsam ipsum labore laudantium neque nisi omnis quam
              quia quidem quo, repudiandae?
            </p>
            <a href="https://rdjfuturo.netlify.app/about/" target="_blank">
              Leer mas
            </a>
          </div>
          <div className="col-sm order-md-1">
            <img
              src={imtOurMission}
              width={450}
              className="img-fluid"
              alt="Responsive image"
            />
          </div>
        </Row>
      </Container>
    </div>
  );
}
