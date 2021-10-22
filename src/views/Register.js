import React from "react";
import withForm from "../hoc/withForm";
import FormImage from "../components/FormImage/FormImage";
import fields from "../core/constants/fields";

const Register = () => {
  const { name, secondName, email, password, birthdate } = fields;
  fields.name = true;
  fields.secondName = true;
  fields.email = true;
  fields.password = true;
  fields.birthdate = true;

  const WithFormRegister = withForm("Registration", FormImage, fields);

  return <WithFormRegister />;
};

export default Register;
