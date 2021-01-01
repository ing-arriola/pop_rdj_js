import React from "react";
import { Form, Field, ErrorMessage } from "formik";

const FormContainer = ({ isSubmitting }) => {
  return (
    <Form>
      <Field type="email" name="email" />
      <ErrorMessage name="email" component="div" />
      <Field type="password" name="password" />
      <ErrorMessage name="password" component="div" />
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

export default FormContainer;
