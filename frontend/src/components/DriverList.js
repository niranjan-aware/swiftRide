import React, { Fragment, useEffect, useState } from "react";
import DriverCard from "./DriverCard";
import NavigationBar from "./NavigationBar";
import "../css/DriverList.css";
import axios from "axios";

const DriverList = () => {
  const [drivers, setDrivers] = useState([]);
  const [error, setError] = useState(null);

  const handleDelete = (id) => {
    console.log(id)
    axios
      .delete(`http://localhost:5000/DriverDetails/${id}`)
      .then((response) => {
        console.log("Driver entry deleted successfully");
        // Handle any additional logic after deletion if needed
      })
      .catch((error) => {
        console.error("Error deleting Driver entry:", error);
      });
  };
   

  useEffect(() => {
    axios
      .get("http://localhost:5000/DriverDetails")
      .then((response) => {
        setDrivers(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [handleDelete]);


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
              id={driver._id}
              name={driver.name}
              idNumber={driver.driver_id}
              email={driver.email}
              phoneNumber={driver.phone_number}
              onDelete={() => handleDelete(driver._id)}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default DriverList;
