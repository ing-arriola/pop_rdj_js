import React from "react";
import FormContainer from "../Container/FormContainer";
import signUp from "../Resources/signup.svg";

const Register = () => (
  <div className="mt-3 form-container mb-5">
    <h1 className="text-center ">¡Bienvenido!👋</h1>
    <h3 className="text-center ">
      ¡Estas a un paso de una gran experiencia!😃
    </h3>
    <h3 className="text-center ">
      Crea tu perfil, ingresando la siguiente información
    </h3>
    <img
      src={signUp}
      width={450}
      className="p-3 img-fluid mx-auto d-block"
      alt="Responsive image"
    />

    <FormContainer isSubmitting />
  </div>
);

export default Register;
