import React from "react";
import { Formik } from "formik";
import FormContainer from "../Container/FormContainer";

const Register = () => (
  <div>
    <h1>Crea tu perfil de usuario</h1>

    <FormContainer isSubmitting />
  </div>
);

export default Register;
