import React, { useState } from 'react';
import CabCard from './CabCard';
import Cabmodal from './Cabmodal';

const ParentComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCab, setSelectedCab] = useState(null);

  const handleOpenModal = (cab) => {
    setSelectedCab(cab);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedCab(null);
    setIsModalOpen(false);
  };

  const handleSubmitModal = (formData) => {
    // Perform the submit operation with the form data
    console.log(formData);
    // Close the modal
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Render the CabCard component */}
      <CabCard
        cab_registration_number="ABC123"
        cab_model="Sedan"
        cab_colour="Black"
        onEdit={() =>
          handleOpenModal({
            cab_registration_number: "ABC123",
            cab_model: "Sedan",
            cab_colour: "Black",
          })
        }
      />
      {/* Render the Cabmodal component */}
      {selectedCab && (
        <Cabmodal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleSubmitModal}
          initialData={selectedCab}
        />
      )}
    </div>
  );
};

export default ParentComponent;
