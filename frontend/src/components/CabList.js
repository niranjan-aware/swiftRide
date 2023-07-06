import React, { Fragment, useEffect, useState } from 'react';
import CabCard from './CabCard';
import '../css/CabList.css';
import NavigationBar from './NavigationBar';
import axios from 'axios';

const CabList = () => {
  const [cabDetails, setCabDetails] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/CabDetails')
      .then((response) => {
        setCabDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (registrationNumber) => {
    // Perform the delete operation using the registrationNumber
    // Update the cabDetails state after deletion
    const updatedCabDetails = cabDetails.filter(
      (cab) => cab.registrationNumber !== registrationNumber
    );
    setCabDetails(updatedCabDetails);
  };

  return (
    <Fragment>
      <NavigationBar />
      <div className="cab-list">
        <h2 className="list-heading">Cab List</h2>
        <div className="cards-container">
          {cabDetails.map((cab) => (
            <>
            <CabCard
              key={cab._id}
              cab_registration_number={cab.cab_registration_number}
              cab_model={cab.cab_model}
              cab_colour={cab.cab_colour}
              onDelete={() => handleDelete(cab.cab_registration_number)}
            />
            </>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default CabList;
