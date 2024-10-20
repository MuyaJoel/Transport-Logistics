import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-cont">
        <Link to="/">Home</Link>
        <Link to="/reservation">Reservations</Link>
      </div>
    </nav>
  );
};

export default NavBar;
