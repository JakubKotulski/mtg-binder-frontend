import "./NavBar.css";
import React from "react";
import TemporaryAuthorization from "../TemporaryAuthorization/TemporaryAuthorization";

const NavBar = () => {
  return (
    <nav className="nav">
      <TemporaryAuthorization />
    </nav>
  );
};

export default NavBar;
