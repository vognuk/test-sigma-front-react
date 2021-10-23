import React from "react";
import { NavLink, NavItem, Nav } from "reactstrap";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <div
      style={{
        position: "fixed",
        left: "0px",
        bottom: "0px",
        height: "30px",
        width: "100%",
        textDecoration: "none",
        margin: "15px",
      }}
    >
      <NavLink
        href="https://www.linkedin.com/in/vitalii-chervonyi/"
        target="_blank"
        color="faded"
      >
        {/* <FiLinkedin /> */}
      </NavLink>
      <FiLinkedin />
    </div>
  );
};

export default Footer;
