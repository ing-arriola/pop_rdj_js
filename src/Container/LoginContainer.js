import React from "react";
import logo from "../Resources/logo_rjf.png";
import FormLogin from "../Components/FormLogin";

const LoginContainer = () =>{
    return(
        <>
            <div className='pt-5 pb-5' style={{width: '350px'}}>
                <div>
                    <img src={logo} width='350px' alt=""/>
                </div>
                <FormLogin/>
            </div>
        </>
    );
}
export default LoginContainer;