import React from "react";
import { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Login from "./components/Auth/Login";
import RegisterAsCarOwner from "./components/Auth/RegisterAsCarOwner";
import RegisterAsDriver from "./components/Auth/RegisterAsDriver";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route
            path="/registerascarowner"
            element={<RegisterAsCarOwner />}
            exact
          />
          <Route
            path="/registerasdriver"
            element={<RegisterAsDriver />}
            exact
          />
          <Route path="/login" element={<Login />} exact />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;