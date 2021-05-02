/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useState} from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import LoginButton from '../Components/LoginButton'
import LogoutButton from '../Components/LogoutButton'
import logo from "../Resources/logo_pop.png";
import {auth, db} from "../utils/firebase";

export default function NavbarContainer() {
    const [authUser, setUser] = React.useState(null)
    const [currentUserData,setCurrentUserData] = useState({})
    React.useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user){
                setUser(user)
            }else{
                setUser(null)
            }
        })
    }, [])
    React.useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user){
                checkRol();
            }
        })
    }, [])

    const checkRol = () => {
        db.ref("auth").on("value", snapshot => {
            const authUsers = snapshot.val()
            let currentUser=undefined
            authUsers.forEach(user => {
                if(user.email === auth.currentUser.email){
                    currentUser=user
                }
            })
            setCurrentUserData(currentUser)
        }, (error) => console.log(error))
    }

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
                authUser && currentUserData.rol === "admin" && (
                    <NavLink className="nav-item" to="/results" exact >
                        Resultados
                    </NavLink>)
                }
          {
              authUser && currentUserData.rol !== "admin" && (
              <NavLink className="nav-item" to="/users" exact >
                Evaluacion
              </NavLink>)
          }

         {
             authUser ? (<LogoutButton/>) : (<LoginButton/>)
         }        
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

