
  return (
    <div>
      <NavigationBar />
      <Container>
        <Row className="vh-95 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="bg-dark">
              <Card.Body className="bg-dark">
                <div className="mb-3 mt-md-4">
                  <div className="mb-3 text-center">
                    <h2
                      className="fw-bold p-2 text-light"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      <p
                        style={{
                          display: "inline",
                          color: "yellow",
                          fontFamily: "Azonix",
                          fontStyle: "italic",
                        }}
                      >
                        Login Form
                      </p>
                    </h2>
                    <Tabs
                      id="login-form-tabs"
                      activeKey={key}
                      onSelect={handleTabChange}
                      className="mb-3"
                      variant="pills"
                      justify="center"
                    >
                      <Tab eventKey="driver" title="Login as Driver">
                        <Form className="p-3" onSubmit={handleSubmit}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="text-start">
                              Email address
                            </Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Enter email"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                          >
                            <Form.Label className="text-start">
                              Password
                            </Form.Label>
                            <Form.Control
                              type="password"
                              placeholder="Password"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicConfirmPassword"
                          >
                            <Form.Label className="text-start">
                              Confirm Password
                            </Form.Label>
                            <Form.Control
                              type="password"
                              placeholder="Confirm Password"
                            />
                          </Form.Group>
                          <div className="d-grid pt-3 pb-3">
                            <Button variant="outline-warning " type="submit">
                              Login as DRIVER
                            </Button>
                          </div>
                        </Form>
                        <div className="mt-3">
                          <p className="mb-0 text-center p-3 text-light">
                            Don't have an account?{" "}
                            <a
                              href="./registerasdriver"
                              className="text-primary fw-bold"
                            >
                              Register Now
                            </a>
                          </p>
                        </div>
                      </Tab>
                      <Tab eventKey="carOwner" title="Login as Car Owner">
                        <Form className="p-3" onSubmit={handleSubmit}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="text-start">
                              Email address
                            </Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Enter email"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                          >
                            <Form.Label className="text-start">
                              Password
                            </Form.Label>
                            <Form.Control
                              type="password"
                              placeholder="Password"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicConfirmPassword"
                          >
                            <Form.Label className="text-start">
                              Confirm Password
                            </Form.Label>
                            <Form.Control
                              type="password"
                              placeholder="Confirm Password"
                            />
                          </Form.Group>
                          <div className="d-grid pt-3 pb-3">
                            <Button variant="outline-warning" type="submit">
                              Login as Car Owner
                            </Button>
                          </div>
                        </Form>
                        <div className="mt-3">
                          <p className="mb-0 text-center p-3 text-light">
                            Don't have an account?{" "}
                            <a
                              href="./registerascarowner"
                              className="text-primary fw-bold"
                            >
                              Register Now
                            </a>
                          </p>
                        </div>
                      </Tab>
                    </Tabs>
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