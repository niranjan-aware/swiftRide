import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import '../css/DriverCard.css';
import DriverModal from './DriverModal';
import AssignedCabsModal from './AssignedCabsModal';

const DriverCard = ({ id, driverId, name, idNumber, email, phoneNumber, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAssignedCabsModalOpen, setIsAssignedCabsModalOpen] = useState(false);

  const handleDelete = () => {
    // Call the API or perform the delete operation here
    onDelete(driverId);
  };

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveModal = (updatedDriverData) => {
    // Call the API or perform the edit operation here
    // console.log(updatedDriverData);
    setIsModalOpen(false);
  };

  const handleAssignedCabs = () => {
    setIsAssignedCabsModalOpen(true);
  };

  const handleCloseAssignedCabsModal = () => {
    setIsAssignedCabsModalOpen(false);
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
        <button className="edit-button" onClick={handleEdit}>
          <FaEdit />
        </button>
        <button className="delete-button" onClick={handleDelete}>
          <FaTrash />
        </button>
      </div>
      <div className="driver-assigned-cabs">
        <button className="assigned-cabs-button" onClick={handleAssignedCabs}>
          Assigned Cabs
        </button>
      </div>
      <DriverModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        driverData={{
          id,
          driverId,
          name,
          idNumber,
          email,
          phoneNumber,
        }}
        onSave={handleSaveModal}
      />
      <AssignedCabsModal
        driver_id={id}
        isOpen={isAssignedCabsModalOpen}
        onClose={handleCloseAssignedCabsModal}
      />
    </div>
  );
};

export default DriverCard;
