import React from "react";
import NavbarContainer from "../Container/NavbarContainer";
import {Button, Container} from "react-bootstrap";
import imgLop from "../Resources/undraw_investment_data_yfvt.svg"
import {Link} from "react-router-dom";
const HomePage = () => {
  return (
      <>
      <div className="vh-100">
          <NavbarContainer/>
          <Container className="d-flex align-items-center justify-content-around mt-5">
              <div className="d-flex flex-column align-items-center mr-3">
                  <h1 className="text-center">Programa de oportunidades profesionales</h1>
                  <Button className="btn btn-primary btn-lg btn-block">Unirme</Button>
                  <p>¿Ya tienes cuenta?<Link> Iniciar Sesion</Link></p>
              </div>
              <img src={imgLop} width={800}/>
          </Container>
      </div>
      </>
  );
};

export default HomePage;
