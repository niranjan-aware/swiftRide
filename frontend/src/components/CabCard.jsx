import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import '../css/CabCard.css';
import CabModal from './CabModal';

const CabCard = ({ cab_id,cab_registration_number, cab_model, cab_colour, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    // Call the API or perform the delete operation here
    onDelete(cab_registration_number);
  };

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveModal = (updatedCabData) => {
    // Call the API or perform the edit operation here
    console.log(updatedCabData);
    setIsModalOpen(false);
  };

  return (
    <div className="cab-card">
      <div className="cab-details">
        <h2 className="cab-title">{cab_registration_number}</h2>
        <p>Model: {cab_model}</p>
        <p>Colour: {cab_colour}</p>
      </div>
      <div className="cab-actions">
        <button className="edit-button" onClick={handleEdit}>
          <FaEdit />
        </button>
        <button className="delete-button" onClick={handleDelete}>
          <FaTrash />
        </button>
      </div>
      <CabModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        cabData={{
          cab_id,
          cab_registration_number,
          cab_model,
          cab_colour,
        }}
        onEdit={handleSaveModal}
      />
    </div>
  );
};

export default CabCard;
