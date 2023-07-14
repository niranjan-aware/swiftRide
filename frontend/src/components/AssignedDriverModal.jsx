import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../css/AssignedDriverModal.css';

const AssignedDriversModal = ({ isOpen, onClose }) => {
  const [driverList, setDriverList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDriverList = async () => {
      try {
        const response = await axios.get('http://localhost:5000/DriverDetails');
        setDriverList(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchDriverList();
  }, []);

  const handleAddItem = async (itemId) => {
    try {
      // Add your logic to assign the driver here
      console.log('Added item:', itemId);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <Modal show={isOpen} onHide={onClose} className="assigned-drivers-modal">
      <Modal.Header closeButton>
        <Modal.Title>Assigned Drivers</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error ? (
          <div>Error: {error}</div>
        ) : (
          <>
            <p>Choose from the below list:</p>
            <ul>
              {driverList.map((driver) => (
                <li key={driver._id}>
                  <div className="item-details">
                    <div>
                      <p>Driver ID: {driver._id}</p>
                      <p>Name: {driver.name}</p>
                      <p>ID Number: {driver.idNumber}</p>
                      <p>Email: {driver.email}</p>
                      <p>Phone Number: {driver.phoneNumber}</p>
                    </div>
                    <div className="item-actions">
                      <Button
                        variant="primary"
                        onClick={() => handleAddItem(driver._id)}
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

export default AssignedDriversModal;
