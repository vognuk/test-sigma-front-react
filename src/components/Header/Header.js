import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import routes from "../../routes/routes";
import { NavLink as NavLinkRoute } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";

const Header = (props, setLoged) => {
  const [collapsed, setCollapsed] = useState(true);
  let isAuthenticated = useSelector((state) =>
    authSelectors.getIsAuthenticated(state)
  );
  useEffect(() => {
    // setLoged(false);
  }, [isAuthenticated]);

  console.log(isAuthenticated);

  const dispatch = useDispatch();

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar
        className="mx-3"
        color="faded"
        light
        isAuthenticated={isAuthenticated}
      >
        <NavbarBrand href="/" className="mr-auto">
          <FiHome color="faded" />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            {isAuthenticated ? (
              <NavItem>
                <NavLinkRoute
                  style={{ textDecoration: "none" }}
                  to="/"
                  onClick={() => dispatch(authOperations.logOut())}
                  exact
                >
                  <NavLink>Logout</NavLink>
                </NavLinkRoute>
              </NavItem>
            ) : (
              <>
                <NavItem>
                  <NavLinkRoute
                    style={{ textDecoration: "none" }}
                    to="/register"
                    exact
                  >
                    <NavLink>Register</NavLink>
                  </NavLinkRoute>
                </NavItem>
                <NavItem>
                  <NavLinkRoute style={{ textDecoration: "none" }} to="/login">
                    <NavLink>Login</NavLink>
                  </NavLinkRoute>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
