import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import '../css/CabCard.css';

const CabCard = ({ cab_registration_number, cab_model, cab_colour }) => {
  console.log(cab_colour);
  return (
    <div className="cab-card">
      <div className="cab-details">
        <h2 className="cab-title">{cab_registration_number}</h2>
        <p>Model: {cab_model}</p>
        <p>Colour: {cab_colour}</p>
      </div>
      <div className="cab-actions">
        <button className="edit-button">
          <FaEdit />
        </button>
        <button className="delete-button">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CabCard;
