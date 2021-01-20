import React from "react";
import {Navbar,Nav,NavDropdown} from "react-bootstrap";

export default function NavbarContainer (){
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {/*<Nav.Link href="#link">Ingresa </Nav.Link>
                    <p className="m-auto">/</p>
                    <Nav.Link>Registrate</Nav.Link>*/}
                    <Nav.Link href="#home">Sobre nosotros</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
