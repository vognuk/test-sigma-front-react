/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import withForm from "../hoc/withForm";
import FormImage from "../components/FormImage/FormImage";

const Register = () => {
  const [nameFieldRender, setNameFieldRender] = useState(true);
  const [secondNameFieldRender, setSecondNameFieldRender] = useState(true);
  const [emailFieldRender, setEmailFieldRender] = useState(true);
  const [passwordFieldRender, setPasswordFieldRender] = useState(true);
  const [birthdateFieldRender, setBirthdateFieldRender] = useState(true);

  const WithFormRegister = withForm(
    "Registration",
    FormImage,
    nameFieldRender,
    secondNameFieldRender,
    emailFieldRender,
    passwordFieldRender,
    birthdateFieldRender
  );

  return <WithFormRegister />;
};

export default Register;
