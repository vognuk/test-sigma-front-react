import React from "react";
import withForm from "../hoc/withForm";
import FormImage from "../components/FormImage/FormImage";
import fields from "../core/constants/fields";

const Login = () => {
  const { name, password } = fields;
  fields.name = true;
  fields.password = true;

  const WithFormLogin = withForm("Login", FormImage, fields);

  return <WithFormLogin />;
};

export default Login;
