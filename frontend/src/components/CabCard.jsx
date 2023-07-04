import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import '../css/CabCard.css';

const CabCard = ({ registrationNumber, model, colour }) => {
  return (
    <div className="cab-card">
      <div className="cab-details">
        <h2 className="cab-title">{registrationNumber}</h2>
        <p>Model: {model}</p>
        <p>Colour: {colour}</p>
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
