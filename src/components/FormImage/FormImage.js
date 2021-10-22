import React, { useEffect } from "react";
import { Container, Button, Form, FormGroup, Input } from "reactstrap";
// import classNames from "classnames";
import PropTypes from "prop-types";
import { mapToCssModules, tagPropType } from "../../core/utils/reactstrapUtils";

const FormImage = ({ formHeading, fields, isError, setIsLoading }) => {
  const { name, secondName, email, password, birthdate } = fields;

  useEffect(() => {
    fields.name = false;
    fields.secondName = false;
    fields.email = false;
    fields.password = false;
    fields.birthdate = false;
  }, []);

  return (
    <Container>
      <Form>
        {fields.name && (
          <FormGroup>
            <Input
              className="mblank-2 my-2 w-320"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
          </FormGroup>
        )}
        {fields.secondName && (
          <FormGroup>
            <Input
              className="mblank-2 my-2"
              type="text"
              name="secondname"
              id="secondname"
              placeholder="Second name"
            />
          </FormGroup>
        )}
        {fields.email && (
          <FormGroup>
            <Input
              className="mblank-2 my-2"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </FormGroup>
        )}
        {fields.password && (
          <FormGroup>
            <Input
              className="mblank-2 my-2"
              type="password"
              name="password"
              id="Password"
              placeholder="Password "
            />
          </FormGroup>
        )}
        {fields.birthdate && (
          <FormGroup>
            <Input
              className="mblank-2 my-2"
              type="date"
              name="date"
              id="date"
              placeholder="Birthdate"
            />
          </FormGroup>
        )}
        <Button className="m-3">{formHeading}</Button>
      </Form>
    </Container>
  );
};

FormImage.propTypes = {
  children: PropTypes.node,
  // type can be things like text, password, (typical input types) as well as select and textarea, providing children as you normally would to those.
  type: PropTypes.string,
  size: PropTypes.string,
  bsSize: PropTypes.string,
  // state: deprecated(PropTypes.string, 'Please use the prop "valid"'),
  valid: PropTypes.bool, // applied the is-valid class when true, does nothing when false
  invalid: PropTypes.bool, // applied the is-invalid class when true, does nothing when false
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // ref will only get you a reference to the Input component, use innerRef to get a reference to the DOM input (for things like focus management).
  // static: deprecated(PropTypes.bool, 'Please use the prop "plaintext"'),
  plaintext: PropTypes.bool,
  addon: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  inline: PropTypes.bool,
  // Pass in a Component to override default element
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string,
  ]),
  // Applid the row class when true, does nothing when false
  row: PropTypes.bool,
  // Applied the form-check class when true, form-group when false
  check: PropTypes.bool,
  // Applied the disabled class when the check and disabled props are true, does nothing when false
  disabled: PropTypes.bool,
  // Pass in a Component to override default element
  // Pass in a Component to override default element
  color: PropTypes.string, // default: 'muted'
};

export default FormImage;
