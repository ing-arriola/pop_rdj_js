import React from 'react'
import { Button } from "react-bootstrap"
import {useAuth0} from '@auth0/auth0-react'

const LogoutButton = () => {
    const {logout}=useAuth0()
    
    return (
        <Button
        onClick={()=>logout()}
        className="btn btn-lg btn-block hero-button"
        style={{
          backgroundColor: "#FE3E00",
          borderBlockColor: "#FE3E00",
          boxShadow: "#FE3E00",
          borderBottomColor: "#FE3E00",
          borderColor: "#FE3E00",
        }}
      >
        Logout
      </Button>
    )
}

export default LogoutButton
