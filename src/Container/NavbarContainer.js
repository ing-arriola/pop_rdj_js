/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {useAuth0} from '@auth0/auth0-react'
import LoginButton from '../Components/LoginButton'
import LogoutButton from '../Components/LogoutButton'
import logo from "../Resources/logo_pop.png";

export default function NavbarContainer() {
  const {isAuthenticated, user} = useAuth0()
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
          {
            isAuthenticated && (
              <NavLink className="nav-item" to="/users" exact >
                Evaluacion
              </NavLink>)
          }
         {
           isAuthenticated ? (<LogoutButton/>) : (<LoginButton/>) 
         }        
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

