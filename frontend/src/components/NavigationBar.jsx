import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "./logo2.jpg";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const NavigationBar = () => {
  return (
    <Navbar bg="transparent" variant="dark">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand>
          <Link to="/">
            <img
              alt=""
              src={logo}
              width="70"
              height="70"
              className="d-inline-block align-top"
            />
          </Link>
          <span
            style={{
              marginLeft: "10px",
              fontSize: "2rem",
              fontFamily: "Azonix",
              color: "yellow",
              fontStyle: "italic",
            }}
          >
            SWIFTRIDE
          </span>
        </Navbar.Brand>
        <div>
          <Link to="/login">
            <Button
              variant="outline-warning"
              style={{
                borderRadius: "20px",
                padding: "8px 20px",
                fontSize: "1rem",
              }}
            >
              Login
            </Button>
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
