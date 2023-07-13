import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import NavigationBar from "../NavigationBar";
import "./RegisterAsDriver.css";

export default function RegisterAsDriver() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleClose = () => {
    // Handle modal close logic here
  };

  return (
    <div className="register-driver">
      <NavigationBar />
      <div className="register-driver-overlay"></div>
      <Container className="register-driver-container">
        <Card className="register-driver-card">
          <Card.Header className="register-driver-header">
            <h2 className="register-driver-heading">Login as Driver</h2>
            <Button
              variant="link"
              className="register-driver-close-button"
              onClick={handleClose}
            >
              X
            </Button>
          </Card.Header>
          <Card.Body>
            <Form className="register-driver-form" onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
            <p className="register-driver-signup-link">
              Don't have an account? <a href="./registerasdriver">Sign up</a>
            </p>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
