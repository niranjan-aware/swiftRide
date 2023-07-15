import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../css/AssignedCabsModal.css';

const AssignedCabsModal = ({driver_id, isOpen, onClose }) => {
  const [cabList, setCabList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCabList = async () => {
      try {
        const response = await axios.get('http://localhost:5000/CabDetails');
        setCabList(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCabList();
  }, []);

  const handleAddItem = async (itemId) => {
    try {
      const response = await axios.put(`http://localhost:5000/AssignedCabs/${driver_id}`, {
        assigned_cab: itemId
      });
      window.alert('User Added Succefully !')
      console.log('Added item:', response.data);
    } catch (error) {
        window.alert('Error adding item:user is Already added');  
        console.error('Error adding item:', error);
    }
  };

  return (
    <Modal show={isOpen} onHide={onClose} className="assigned-cabs-modal">
      <Modal.Header closeButton>
        <Modal.Title>Assigned Cabs</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error ? (
          <div>Error: {error}</div>
        ) : (
          <>
            <p>Choose from the below list:</p>
            <ul>
              {cabList.map((cab) => (
                <li key={cab._id}>
                  <div className="item-details">
                    <div>
                      <p>Cab ID: {cab._id}</p>
                      <p>Registration Number: {cab.cab_registration_number}</p>
                      <p>Model: {cab.cab_model}</p>
                      <p>Colour: {cab.cab_colour}</p>
                    </div>
                    <div className="item-actions">
                      <Button
                        variant="primary"
                        onClick={() => handleAddItem(cab._id)}
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AssignedCabsModal;
