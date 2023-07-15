import React from "react";
import "../css/Home.css";
import Container from "react-bootstrap/Container";
import Lottie from "react-lottie";
import taxi2 from "./taxi2.json";
import NavigationBar from "./NavigationBar";
import { Link } from "react-router-dom";

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: taxi2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="home-container">
      <NavigationBar />
      <div className="home-page">
        <Container>
          <div className="row justify-content-center">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div className="text-content">
                <h1 className="animate_animated animate_fadeInLeft">
                  Welcome to{" "}
                  <span
                    className="highlight"
                  >
                    SWIFTRIDE
                  </span>
                </h1>
                <p className="animate_animated animate_fadeInLeft">
                  "Experience the Future of Cab Management with SwiftRide"
                </p>
                <br />
                <div className="btn-group">
                  <Link to="/DiverList" className="btn btn-outline-warning">
                  Driver Enrollment
                  </Link>
                  <Link to="/CabList" className="btn btn-outline-warning">
                  Cab Enrollment
                  </Link>
                  <Link to="/TabList" className="btn btn-outline-warning">
                    Cab-Driver Assignment
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div className="image-content animate_animated animate_fadeInRight">
                <div className="lottie-container">
                  <Lottie options={defaultOptions} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
