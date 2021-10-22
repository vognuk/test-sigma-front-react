import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import routes from "../../routes/routes";
import { NavLink as NavLinkRoute } from "react-router-dom";
import { FiHome } from "react-icons/fi";

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar className="mx-3" color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          <FiHome color="faded" />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLinkRoute style={{ textDecoration: "none" }} to="/home" exact>
                <NavLink>Home</NavLink>
              </NavLinkRoute>
            </NavItem>
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
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
