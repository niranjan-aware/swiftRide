import React from "react";
import { Fragment } from 'react';
import { BrowserRouter,useNavigate, Routes, Route, NavLink } from "react-router-dom";
import classes from "./LandingPage.module.css";
import Home from './Home'



function LandingPage() {

  const navigate=useNavigate();

  const navigateHome=()=>{
    navigate('/Home')
  }

  return (
    <Fragment>
      <div>
        <div className={classes.navbarbody}>
          <nav className={classes.mainnav}>
            <ul className={classes.navul}>
              <li className={classes.navul_li}>
                <a className={classes.navulli_a} href="#">
                  Login/SignUp
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={classes.mainsidebar}>
          <nav className={classes.sidebar_nav}>
            <div className={classes.sidebar}>
              <ul className={classes.sidebar_ul}>
                <li className={classes.sidebar_li}>
                  <a onClick={navigateHome} to="/Home" className={classes.sidebar_a}>
                    DriverSymb
                  </a>
                </li>
                <li className={classes.sidebar_li}>
                  <a className={classes.sidebar_a} href="#">
                    Carsymb
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <p>swiftRIDE</p>
        </div>
      </div>
      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>
      </Fragment>
  );
}

export default LandingPage;
