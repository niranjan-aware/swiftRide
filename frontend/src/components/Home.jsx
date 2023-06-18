import React from 'react';
import '../css/Home.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Lottie from 'react-lottie';
import taxi2 from './taxi2.json';
import logo from './logo.png'



const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: taxi2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div style={{ minHeight: '100%' }} >
      <Navbar bg="transparent" variant="dark" style={{}}>
        <Container>

          <div style={{}}>
            <Navbar.Brand>
              <img
                alt=""
                src={logo}
                width="90"
                height="90"
                className=" "
              />
              <span style={{ marginLeft: "", fontSize: "2rem", fontFamily: "Azonix", color: "yellow", fontStyle: "italic" }}>SWIFTRIDE</span>
            </Navbar.Brand>
          </div>

        </Container>
      </Navbar>

      <div className="home-page" style={{ display: 'flex', alignItems: 'center' }}>
        <Container>
          <div className="row justify-content-center">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div className="text-content">
                <h1 className="animate__animated animate__fadeInLeft" style={{ marginBottom: "5px" }}>Welcome to <p style={{ color: "yellow", fontFamily: "Azonix", fontStyle: "italic" }}>SWIFTRIDE</p></h1>
                <p className="animate__animated animate__fadeInLeft">
                  "Experience the Future of Cab Management with SwiftRide"
                </p>
                <br />
                <button className="btn btn-outline-warning  ">Register as Driver </button>
                <button className="btn btn-outline-warning mx-3">Register as Cab Owner </button>
                <button className="btn btn-outline-warning ">Register as User</button>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div className="image-content animate__animated animate__fadeInRight">
                {/* <img
                  src={car2}
                  alt="Car"
                  style={{ width: '100%', height: '50vh',borderRadius:'30px' }}
                
                /> */}
                <Lottie
                  options={defaultOptions}
                  height={700}
                  width={700}
                />
              </div>
            </div>
          </div>

        </Container>
      </div>
    </div>
  );
};

export default Home;
