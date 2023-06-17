import React from 'react'
import "../css/Home.css"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const Home = () => {
  return (
    <>
          <Navbar bg="transperent" variant="dark" >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>

      <div className="home-page">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="text-content">
              <h1 className="animate__animated animate__fadeInLeft">Welcome to Our Website</h1>
              <p className="animate__animated animate__fadeInLeft">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend lacus at justo feugiat, vel dignissim risus finibus.</p>
              <button className="btn btn-primary animate__animated animate__fadeInLeft">Learn More</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-content animate__animated animate__fadeInRight">
              <img src="/path/to/your/image.jpg" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
