import React, { useState } from "react";

const withFrom = (formHeading, WrappedForm, fields) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    return (
      <WrappedForm
        {...props}
        formHeading={formHeading}
        setIsLoading={setIsLoading}
        isError={isError}
        fields={fields}
      />
    );
  };
};

export default withFrom;
