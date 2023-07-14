import React, { useState } from 'react';
import axios from 'axios';
import '../css/CabModal.css';

const CabModal = ({ isOpen, onClose, cabData, onEdit }) => {
  const [cabRegistrationNumber, setCabRegistrationNumber] = useState(cabData.cab_registration_number);
  const [cabModel, setCabModel] = useState(cabData.cab_model);
  const [cabColour, setCabColour] = useState(cabData.cab_colour);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make the API call to update the cab details
      console.log(cabData._id,cabRegistrationNumber,cabModel,cabColour)
      await axios.put(`http://localhost:5000/CabDetails/${cabData.cab_id}`, {
        cab_registration_number: cabRegistrationNumber,
        cab_model: cabModel,
        cab_colour: cabColour,
      });
      // Call the onEdit function to update the state in the parent component
      onEdit(cabData._id, cabRegistrationNumber, cabModel, cabColour);
      // Close the modal
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Cab Details</h2>
        <form onSubmit={handleSubmit} style={{padding:"22px"}}>
          <div className="form-group">
            <label htmlFor="cabRegistrationNumber">Registration Number:</label>
            <input
              type="text"
              id="cabRegistrationNumber"
              value={cabRegistrationNumber}
              onChange={(e) => setCabRegistrationNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cabModel">Model:</label>
            <input
              type="text"
              id="cabModel"
              value={cabModel}
              onChange={(e) => setCabModel(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cabColour">Colour:</label>
            <input
              type="text"
              id="cabColour"
              value={cabColour}
              onChange={(e) => setCabColour(e.target.value)}
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit">Save</button>
          </div>
        </form>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default CabModal;