import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "../css/DriverCard.css";

const DriverCard = ({ name, idNumber, email, phoneNumber, onDelete }) => {
  const handleDelete = () => {
    // Call the API or perform the delete operation here
    onDelete(idNumber);
  };

  return (
    <div className="driver-card">
      <div className="driver-details">
        <h2 className="driver-name">{name}</h2>
        <p className="driver-id">ID Number: {idNumber}</p>
        <div className="driver-info">
          <p>Email: {email}</p>
          <p>Phone Number: {phoneNumber}</p>
        </div>
      </div>
      <div className="driver-actions">
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};


export default DriverCard;
