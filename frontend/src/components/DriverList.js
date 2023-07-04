import React, { Fragment } from "react";
import DriverCard from "./DriverCard";
import NavigationBar from "./NavigationBar";
import "../css/DriverList.css";

const DriverList = () => {
  const drivers = [
    { id: 1, name: "John Doe", idNumber: "D1234", email: "john@example.com", phoneNumber: "1234567890" },
    { id: 2, name: "Jane Smith", idNumber: "D5678", email: "jane@example.com", phoneNumber: "9876543210" },
    { id: 3, name: "Michael Johnson", idNumber: "D9876", email: "michael@example.com", phoneNumber: "5432167890" },
    { id: 4, name: "Emily Davis", idNumber: "D2468", email: "emily@example.com", phoneNumber: "9087654321" },
    { id: 5, name: "David Brown", idNumber: "D1357", email: "david@example.com", phoneNumber: "6789012345" },
    { id: 6, name: "Sarah Wilson", idNumber: "D8642", email: "sarah@example.com", phoneNumber: "2345678901" },
    { id: 7, name: "Christopher Clark", idNumber: "D7531", email: "chris@example.com", phoneNumber: "7890123456" },
    { id: 8, name: "Jessica Rodriguez", idNumber: "D9513", email: "jessica@example.com", phoneNumber: "4567890123" },
    { id: 9, name: "Matthew Lee", idNumber: "D6420", email: "matthew@example.com", phoneNumber: "9012345678" },
    { id: 10, name: "Olivia Harris", idNumber: "D8640", email: "olivia@example.com", phoneNumber: "3456789012" },
    { id: 11, name: "Daniel Martin", idNumber: "D2379", email: "daniel@example.com", phoneNumber: "8901234567" },
    { id: 12, name: "Sophia Thompson", idNumber: "D6842", email: "sophia@example.com", phoneNumber: "5678901234" },
    { id: 13, name: "James Walker", idNumber: "D4715", email: "james@example.com", phoneNumber: "0123456789" },
    { id: 14, name: "Ava Lewis", idNumber: "D6293", email: "ava@example.com", phoneNumber: "7654321098" },
    { id: 15, name: "Benjamin Turner", idNumber: "D8462", email: "benjamin@example.com", phoneNumber: "3210987654" }
  ];

  return (
    <Fragment>
      <NavigationBar />
      <div className="driver-list-container">
        <h1 className="list-heading">Driver List</h1>
        <div className="cards-container">
          {drivers.map((driver) => (
            <DriverCard
              key={driver.id}
              name={driver.name}
              idNumber={driver.idNumber}
              email={driver.email}
              phoneNumber={driver.phoneNumber}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default DriverList;
