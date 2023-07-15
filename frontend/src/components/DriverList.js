import React, { Fragment, useEffect, useState } from "react";
import DriverCard from "./DriverCard";
import NavigationBar from "./NavigationBar";
import "../css/DriverList.css";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const DriverList = () => {
  const [drivers, setDrivers] = useState([]);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newDriverData, setNewDriverData] = useState({
    name: "",
    driver_id: "",
    email: "",
    phone_number: "",
  });

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/DriverDetails/${id}`)
      .then((response) => {
        console.log("Driver entry deleted successfully");
        // Handle any additional logic after deletion if needed
      })
      .catch((error) => {
        console.error("Error deleting Driver entry:", error);
      });
  };

  const handleAddDriver = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewDriverData({
      name: "",
      driver_id: "",
      email: "",
      phone_number: "",
    });
  };

  const handleSaveDriver = () => {
    axios
      .post("http://localhost:5000/addDriver", newDriverData)
      .then((response) => {
        console.log("New driver entry saved successfully:", response.data);
        setIsModalOpen(false);
        setNewDriverData({
          name: "",
          driver_id: "",
          email: "",
          phone_number: "",
        });
      })
      .catch((error) => {
        console.error("Error saving new driver entry:", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDriverData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/DriverDetails")
      .then((response) => {
        setDrivers(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [handleSaveDriver, handleDelete]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Fragment>
      <NavigationBar />
      <div className="driver-list-container">
        <h1 className="list-heading">Driver List</h1>
        <Button
          className="add-driver-button"
          variant="outline-warning"
          onClick={handleAddDriver}
        >
          Add Driver
        </Button>
        <div className="cards-container">
          {drivers.map((driver) => (
            <DriverCard
              key={driver._id}
              id={driver._id}
              name={driver.name}
              idNumber={driver.driver_id}
              email={driver.email}
              phoneNumber={driver.phone_number}
              onDelete={() => handleDelete(driver._id)}
            />
          ))}
        </div>
      </div>
      <Modal show={isModalOpen} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Driver</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={newDriverData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="driver_id">Driver ID</label>
              <input
                type="text"
                className="form-control"
                id="driver_id"
                name="driver_id"
                value={newDriverData.driver_id}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={newDriverData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone_number">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="phone_number"
                name="phone_number"
                value={newDriverData.phone_number}
                onChange={handleInputChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveDriver}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default DriverList;
