/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const withFrom = (
  formHeading,
  WrappedForm,
  nameFieldRender,
  secondNameFieldRender,
  emailFieldRender,
  passwordFieldRender,
  birthdateFieldRender
) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    return (
      <WrappedForm
        {...props}
        formHeading={formHeading}
        setIsLoading={setIsLoading}
        isError={isError}
        nameFieldRender={nameFieldRender}
        secondNameFieldRender={secondNameFieldRender}
        emailFieldRender={emailFieldRender}
        passwordFieldRender={passwordFieldRender}
        birthdateFieldRender={birthdateFieldRender}
      />
    );
  };
};

export default withFrom;
