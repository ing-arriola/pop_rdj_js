import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../Resources/logo_pop.png";

export default function NavbarContainer() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img
          src={logo}
          width={140}
          data-aos="zoom-in-left"
          className="p-3 img-fluid"
          alt="Responsive image"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {/*<Nav.Link href="#link">Ingresa </Nav.Link>
                    <p className="m-auto">/</p>
                    <Nav.Link>Registrate</Nav.Link>*/}
          <Nav.Link href="https://rdjfuturo.netlify.app/about/" target="_blank">
            Conocenos!
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
