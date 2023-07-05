import React from "react";
import { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Login from "./components/Auth/Login";
import CabList from './components/CabList'
import DriverList from "./components/DriverList";
import TabList from "./components/TabList"

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route
            path="/CabList"
            element={<CabList />}
            exact
          />
          <Route
            path="/DiverList"
            element={<DriverList/>}
            exact
          />
          <Route
            path="/TabList"
            element={<TabList/>}
            exact
          />
          <Route path="/login" element={<Login />} exact />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;