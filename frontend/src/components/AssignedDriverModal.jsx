import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../css/AssignedDriverModal.css';

const AssignedDriversModal = ({cab_id, isOpen, onClose }) => {
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
      const response = await axios.put(`http://localhost:5000/AssignedDrivers/${cab_id}`, {
        assigned_cab: itemId
      });
      console.log('Added item:', response.data);
    } catch (error) {
        window.alert('Error adding item:user is Already added');  
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
