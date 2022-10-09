import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.svg";
import "./NavbarCommon.css";

export default function NavBarComponent2() {
  return (
    <>
      <nav
        className="navbar fixed-top text-bg-dark navbar-expand-lg"
        style={{ backgroundColor: "#00FFFF" }}
      >
        {/* For dark Navbar add text-bg-dark in uper Nav tag's classNames 
        -Meet Patel*/}
        <div className="container-fluid">
          <NavLink className="navbar-brand" style={{ color: "white" }} to="/">
            <img src={logo} className="min-logo" alt="logo" /> Old book WebApp
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <NavLink
                  style={{ color: "white" }}
                  className="nav-link"
                  aria-current="page"
                  to="SellersPage"
                >
                  Sell
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={{ color: "white" }}
                  to="BuyersPage"
                >
                  Cart
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={{ color: "white" }}
                  to="login-signup"
                >
                  Login/sign Up
                </NavLink>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  style={{ color: "white" }}
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
              {/*<li className="nav-item">
                <button className="nav-link disabled">Disabled</button>
              </li>*/}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
