import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-name">
        <p>N-gram words prediction</p>
      </div>
      <div className="header-links">
        <Link to="/"> Predict </Link>
        <Link to="/about"> How it works? </Link>
        <Link to="/team"> Our team </Link>
        <Link to="/contact"> Contact us </Link>
      </div>
    </div>
  );
}

export default Header;
