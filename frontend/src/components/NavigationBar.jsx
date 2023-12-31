import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo2.jpg';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './NavigationBar.css';
import LoginModal from './Auth/Login'; // Import the LoginModal component
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLogin = () => {
    setIsLoginModalOpen(true);
  };

  const handleLogout = () => {
    // Handle logout logic here
    setIsLoggedIn(false);
  };

  const handleLoginModalClose = () => {
    setIsLoginModalOpen(false);
  };

  const handleLoginModalSubmit = () => {
    // Handle login form submission logic here
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  return (
    <div>
      <Navbar bg="transparent" variant="dark" expand="lg" className="fixed-top navbar-full-width">
        <Container fluid>
        
          <Navbar.Brand >
        
            <img
              alt=""
              src={logo}
              width="70"
              height="70"
              className="d-inline-block align-top logo-image"
            />
            <a id="SWIFTRIDE" href="/" >
  <span class="brand-text">SWIFTRIDE</span>
</a>
            {/* <span className="brand-text">SWIFTRIDE</span> */}
         
          </Navbar.Brand>
    
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item" style={{marginRight:"2rem"}}>
                {!isLoggedIn ? (
                  <Button variant="dark" className="login-button" onClick={handleLogin} >
                    <a href="/">Logout</a>
                  </Button>
                ) : (
                  <Button variant="dark" className="login-button" onClick={handleLogout}>
                    Logout
                  </Button>
                )}
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>

     
    </div>
  );
};

export default NavigationBar;