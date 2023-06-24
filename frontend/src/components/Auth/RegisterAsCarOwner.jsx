import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import NavigationBar from "../NavigationBar";

export default function Register() {
  const [carColor, setCarColor] = useState("");
  const [colorName, setColorName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleColorChange = (e) => {
    setCarColor(e.target.value);
    // Perform logic to get color name based on the selected color value
    // For simplicity, we'll just use the color value itself as the name
    setColorName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else if (!validatePassword(password)) {
      setPasswordError(
        "Password must contain at least one uppercase letter, one number, and one specific symbol"
      );
    } else {
      // Passwords match and meet the requirements, proceed with form submission
      setPasswordError("");
      // Additional form submission logic goes here
    }
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    return passwordRegex.test(password);
  };

  return (
    <div>
      <NavigationBar />
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="bg-dark">
              <Card.Body className="bg-dark">
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold text-center p-2 text-light">
                    Register as{" "}
                    <span
                      style={{
                        color: "yellow",
                        fontFamily: "Azonix",
                        fontStyle: "italic",
                      }}
                    >
                      Car Owner
                    </span>
                  </h2>
                  <div className="mb-3">
                    <Form className="p-3" onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="number" placeholder="Enter Phone" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCarRegistration"
                      >
                        <Form.Label>Car Registration Number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Car Registration Number"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCarModel"
                      >
                        <Form.Label>Car Model</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Car Model Number"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCarColor"
                      >
                        <Form.Label>Color</Form.Label>
                        <Form.Control
                          type="color"
                          value={carColor}
                          onChange={handleColorChange}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCarColorName"
                      >
                        <Form.Label>Color Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Car Color Name"
                          value={colorName}
                          readOnly
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={handlePasswordChange}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicConfirmPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Confirm Password"
                          value={confirmPassword}
                          onChange={handleConfirmPasswordChange}
                        />
                        {passwordError && (
                          <div className="text-danger">{passwordError}</div>
                        )}
                      </Form.Group>

                      <div className="d-grid">
                        <Button variant="outline-warning" type="submit">
                          Register as Car Owner
                        </Button>
                      </div>
                    </Form>

                    <div className="mt-3">
                      <p className="mb-0 text-center p-3 text-light">
                        Already have an account?{" "}
                        <a href="./login" className="text-primary fw-bold">
                          Sign In
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}