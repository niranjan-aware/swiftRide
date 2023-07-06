import React, { Fragment, useEffect, useState } from "react";
import DriverCard from "./DriverCard";
import NavigationBar from "./NavigationBar";
import "../css/DriverList.css";
import axios from "axios";

const DriverList = () => {
  const [drivers, setDrivers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/DriverDetails")
      .then((response) => {
        setDrivers(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const handleDelete = (idNumber) => {
    axios
      .delete(`http://localhost:5000/DriverDetails/${idNumber}`)
      .then((response) => {
        // Filter out the deleted driver from the state
        const updatedDrivers = drivers.filter((driver) => driver.driver_id!== idNumber);
        setDrivers(updatedDrivers);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Fragment>
      <NavigationBar />
      <div className="driver-list-container">
        <h1 className="list-heading">Driver List</h1>
        <div className="cards-container">
          {drivers.map((driver) => (
            <DriverCard
              key={driver._id}
              name={driver.name}
              idNumber={driver.driver_id}
              email={driver.email}
              phoneNumber={driver.phone_number}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default DriverList;
