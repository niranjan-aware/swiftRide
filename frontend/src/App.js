import React from 'react';
import { Fragment } from 'react';
// import {BrowserRouter as Router,Routes,Route,NavLink} from "react-router-dom"
// import LandingPage from './components/LandingPage'
import Home from './components/Home'
import './App.css'

function App() {
  return (
    <Fragment>
      {/* <Router>
      <LandingPage/>
      </Router> */}
      <Home></Home>
    </Fragment>
  );
}

export default App;
