
import React from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import NavigationBar from "../NavigationBar";

export default function RegisterAsDriver() {
  return (
    <div>
      <NavigationBar />
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="bg-dark ">
              <Card.Body className="bg-dark">
                <div className="mb-3 mt-md-4">
                  <h2
                    className="fw-bold text-center p-2 text-light"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Register as{" "}
                    <p
                      style={{
                        display: "inline",
                        color: "yellow",
                        fontFamily: "Azonix",
                        fontStyle: "italic",
                      }}
                    >
                      Driver
                    </p>
                  </h2>
                  <div className="mb-3">
                    <Form className="p-3">
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

                      <Form.Group className="mb-3" controlId="formBasicId">
                        <Form.Label>Driver Id (Licence No)</Form.Label>
                        <Form.Control type="text" placeholder="Driver Id" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicConfirmPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Confirm Password"
                        />
                      </Form.Group>

                      <div className="d-grid">
                        <Button variant="outline-warning" type="submit">
                          Register as DRIVER
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
