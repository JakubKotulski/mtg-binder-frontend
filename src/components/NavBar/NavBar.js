import "./NavBar.css";
import React from "react";
import { Link } from "react-router-dom";
import TemporaryAuthorization from "../TemporaryAuthorization/TemporaryAuthorization";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <TemporaryAuthorization />
        </li>
        <Link to="/">
          <li>Home</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
