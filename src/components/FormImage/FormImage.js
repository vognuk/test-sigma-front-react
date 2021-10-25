/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Button, Form, FormGroup, Input } from "reactstrap";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";

const FormImage = ({
  formHeading,
  nameFieldRender,
  secondNameFieldRender,
  emailFieldRender,
  passwordFieldRender,
  birthdateFieldRender,
  isError,
  setIsLoading,
}) => {
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const dispatch = useDispatch();

  console.log(
    formHeading,
    nameFieldRender,
    secondNameFieldRender,
    emailFieldRender,
    passwordFieldRender,
    birthdateFieldRender
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "secondName":
        setSecondName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      case "birthdate":
        setBirthdate(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      name,
      secondName,
      email,
      password,
      birthdate,
    };

    setName(name);
    setSecondName(secondName);
    setEmail(email);
    setPassword(password);
    setBirthdate(birthdate);

    switch (formHeading) {
      case "Registration":
        dispatch(
          authOperations.register({
            name,
            secondName,
            email,
            password,
            birthdate,
          })
        );
        break;

      case "Login":
        dispatch(
          authOperations.logIn({
            email,
            password,
          })
        );
        break;
    }

    setName("");
    setSecondName("");
    setEmail("");
    setPassword("");
    setBirthdate("");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        {nameFieldRender && (
          <FormGroup>
            <Input
              className="mblank-2 my-2 w-320"
              type="text"
              name="name"
              value={name}
              id="name"
              placeholder="Name"
              onChange={handleChange}
            />
          </FormGroup>
        )}
        {secondNameFieldRender && (
          <FormGroup>
            <Input
              className="mblank-2 my-2"
              type="text"
              name="secondName"
              value={secondName}
              id="secondname"
              placeholder="Second name"
              onChange={handleChange}
            />
          </FormGroup>
        )}
        {emailFieldRender && (
          <FormGroup>
            <Input
              className="mblank-2 my-2"
              type="email"
              name="email"
              value={email}
              id="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </FormGroup>
        )}
        {passwordFieldRender && (
          <FormGroup>
            <Input
              className="mblank-2 my-2"
              type="password"
              name="password"
              value={password}
              id="Password"
              placeholder="Password "
              onChange={handleChange}
            />
          </FormGroup>
        )}
        {birthdateFieldRender && (
          <FormGroup>
            <Input
              className="mblank-2 my-2"
              type="date"
              name="birthdate"
              value={birthdate}
              id="birthdate"
              placeholder="Birthdate"
              onChange={handleChange}
            />
          </FormGroup>
        )}
        <Button className="m-3">{formHeading}</Button>
      </Form>
    </Container>
  );
};

export default FormImage;
