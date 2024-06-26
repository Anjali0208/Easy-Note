import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Chatting from "./Chatting/Chatting";
import { userContext } from "../App";

function Header() {
  const { state, dispatch } = useContext(userContext);

  // added new code
  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn) {
      dispatch({ type: "USER", payload: true });
    }
  }, [dispatch]);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <div className="container">
            <Link className="navbar-brand text-light" to="/">
              <img
                className="header_logo"
                src={require("../images/clgLogo.png")}
                alt="logo"
              />
              easyNote
            </Link>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Chatting />
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/logout">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="container">
            <Link className="navbar-brand text-light" to="/">
              <img
                className="header_logo"
                src={require("../images/clgLogo.png")}
                alt="logo"
              />
              easyNote
            </Link>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/about">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-light" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Chatting />
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      );
    }
  };
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#86469C" }}
    >
      <RenderMenu />
    </nav>
  );
}

export default Header;
