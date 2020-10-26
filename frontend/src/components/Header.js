import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/header.css";

const Header = () => {
  return (
    <div className="header">
      <nav
        className="navbar navbar-expand-md navbar-light "
        id="navbar-section"
      >
        <Link className="toHome navbar-brand" to="/">
          <p className="my-auto logo animate__animated animate__backInUp text-danger logo">
            OneSchule
          </p>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-nowrap ml-auto">
            <li className="nav-item ">
              <Link className="toHome nav-link text-dark" to="/">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
