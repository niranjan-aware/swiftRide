    import React, { useEffect, useState } from 'react';
    import CabCard from './CabCard';
    import '../css/CabList.css';
    import NavigationBar from './NavigationBar';
    import axios from 'axios';
    import Modal from 'react-bootstrap/Modal';
    import Button from 'react-bootstrap/Button';

    const CabList = () => {
      const [cabDetails, setCabDetails] = useState([]);
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [newCabData, setNewCabData] = useState({
        cab_registration_number: '',
        cab_model: '',
        cab_colour: '',
      });

      const handleDelete = (id) => {
        console.log(id);
        axios
          .delete(`http://localhost:5000/CabDetails/${id}`)
          .then((response) => {
            console.log('Cab entry deleted successfully');
            // Handle any additional logic after deletion if needed
          })
          .catch((error) => {
            console.error('Error deleting cab entry:', error);
          });
      };

      const handleAddCab = () => {
        setIsModalOpen(true);
      };

      const handleCloseModal = () => {
        setIsModalOpen(false);
        setNewCabData({
          cab_registration_number: '',
          cab_model: '',
          cab_colour: '',
        });
      };

    const handleSaveCab = () => {
      console.log(newCabData)
      axios
        .post('http://localhost:5000/cabProvider', newCabData)
        .then((response) => {
          console.log('New cab entry saved successfully:', response.data);
          setIsModalOpen(false);
          setNewCabData({
            cab_registration_number: '',
            cab_model: '',
            cab_colour: '',
          });
        })
        .catch((error) => {
          console.error('Error saving new cab entry:', error);
        });
    };

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCabData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      useEffect(() => {
        axios
          .get('http://localhost:5000/CabDetails')
          .then((response) => {
            setCabDetails(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, [handleDelete]);

      return (
        <>
          <NavigationBar />
          <div className="cab-list">
            <h2 className="list-heading">Cab List</h2>
            <Button className="add-cab-button" onClick={handleAddCab}>
              Add Cab
            </Button>
            <div className="cards-container">
              {cabDetails.map((cab) => (
                <CabCard
                  key={cab._id}
                  id={cab._id}
                  cab_id={cab._id}
                  cab_registration_number={cab.cab_registration_number}
                  cab_model={cab.cab_model}
                  cab_colour={cab.cab_colour}
                  onDelete={() => handleDelete(cab._id)}
                />
              ))}
            </div>
          </div>
          <Modal show={isModalOpen} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Add Cab</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="form-group">
                  <label htmlFor="cab_registration_number">Cab Registration Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cab_registration_number"
                    name="cab_registration_number"
                    value={newCabData.cab_registration_number}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cab_model">Cab Model</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cab_model"
                    name="cab_model"
                    value={newCabData.cab_model}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cab_colour">Cab Colour</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cab_colour"
                    name="cab_colour"
                    value={newCabData.cab_colour}
                    onChange={handleInputChange}
                  />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleSaveCab}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    };

    export default CabList;
