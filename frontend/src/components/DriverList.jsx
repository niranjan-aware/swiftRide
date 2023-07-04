import React from "react";
import "../css/DriverList.css";
import Card from "./Card";
import NavigationBar from "./NavigationBar";

const DriverList = () => {
  const drivers = [
    { id: 1, name: "John Doe", idNumber: 123456, email: "john@example.com", phoneNumber: "123-456-7890", rating: 4.5 },
    { id: 2, name: "Jane Smith", idNumber: 789012, email: "jane@example.com", phoneNumber: "987-654-3210", rating: 4.2 },
    { id: 3, name: "Michael Johnson", idNumber: 345678, email: "michael@example.com", phoneNumber: "567-890-1234", rating: 4.8 },
    // Add more driver objects as needed
  ];

  return (
    <div className="driver-list-container">
      <NavigationBar />
      <h1 className="list-heading">Driver List</h1>
      <div className="cards-container">
        {drivers.map((driver) => (
          <Card
            key={driver.id}
            name={driver.name}
            idNumber={driver.idNumber}
            email={driver.email}
            phoneNumber={driver.phoneNumber}
            rating={driver.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default DriverList;
