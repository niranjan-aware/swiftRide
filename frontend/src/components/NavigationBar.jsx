import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "./logo2.jpg";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <Navbar bg="transparent" variant="dark" expand="lg" className="fixed-top navbar-full-width">
      <Container fluid>
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="70"
            height="70"
            className="d-inline-block align-top logo-image"
          />
          <span className="brand-text">SWIFTRIDE</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Button variant="light" className="login-button">
                Login
              </Button>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
