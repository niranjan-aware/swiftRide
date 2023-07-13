import React, { useState } from 'react';
import axios from 'axios';
import '../css/DriverModal.css';

const DriverModal = ({ isOpen, onClose, driverData, onSave }) => {
  const [name, setName] = useState(driverData.name);
  const [idNumber, setIdNumber] = useState(driverData.idNumber);
  const [email, setEmail] = useState(driverData.email);
  const [phoneNumber, setPhoneNumber] = useState(driverData.phoneNumber);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make the API call to update the driver details
      await axios.put(`http://localhost:5000/DriverDetails/${driverData.id}`, {
        name:name,
        driver_id:idNumber,
        email:email,
        phone_number:phoneNumber,
      });
      // Call the onEdit function to update the state in the parent component
      onSave(driverData.id, name, idNumber, email, phoneNumber);
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
        <h2>Edit Driver Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="idNumber">ID Number:</label>
            <input
              type="text"
              id="idNumber"
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
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

export default DriverModal;
