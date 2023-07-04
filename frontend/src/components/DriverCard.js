import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "../css/DriverCard.css";

const DriverCard = ({ name, idNumber, email, phoneNumber }) => {
  return (
    <div className="driver-card">
      <div className="driver-details">
        <h2 className="driver-name">{name}</h2>
        <span className="driver-id">ID: {idNumber}</span>
      </div>
      <div className="driver-info">
        <p>Email: {email}</p>
        <p>Phone: {phoneNumber}</p>
      </div>
      <div className="driver-actions">
        <button className="edit-button">
          <FaEdit className="icon" />
        </button>
        <button className="delete-button">
          <FaTrash className="icon" />
        </button>
      </div>
    </div>
  );
};

export default DriverCard;
