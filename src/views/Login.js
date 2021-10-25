/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import withForm from "../hoc/withForm";
import FormImage from "../components/FormImage/FormImage";

const Login = () => {
  const [nameFieldRender, setNameFieldRender] = useState(false);
  const [secondNameFieldRender, setSecondNameFieldRender] = useState(false);
  const [emailFieldRender, setEmailFieldRender] = useState(true);
  const [passwordFieldRender, setPasswordFieldRender] = useState(true);
  const [birthdateFieldRender, setBirthdateFieldRender] = useState(false);

  const WithFormLogin = withForm(
    "Login",
    FormImage,
    nameFieldRender,
    secondNameFieldRender,
    emailFieldRender,
    passwordFieldRender,
    birthdateFieldRender
  );

  return <WithFormLogin />;
};

export default Login;
