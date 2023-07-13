import React, { Fragment, useEffect, useState } from 'react';
import CabCard from './CabCard';
import '../css/CabList.css';
import NavigationBar from './NavigationBar';
import axios from 'axios';

const CabList = () => {
  const [cabDetails, setCabDetails] = useState([]);

 

  const handleDelete = (id) => {
    console.log(id)
    axios
      .delete(`http://localhost:5000/CabDetails/${id}`)
      .then((response) => {
        console.log("Cab entry deleted successfully");
        // Handle any additional logic after deletion if needed
      })
      .catch((error) => {
        console.error("Error deleting cab entry:", error);
      });
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
    <Fragment>
      <NavigationBar />
      <div className="cab-list">
        <h2 className="list-heading">Cab List</h2>
        <div className="cards-container">
          {cabDetails.map((cab) => (
            <>
            <CabCard
              key={cab._id}
              cab_id={cab._id}
              cab_registration_number={cab.cab_registration_number}
              cab_model={cab.cab_model}
              cab_colour={cab.cab_colour}
              onDelete={() => handleDelete(cab._id)}
            />
            </>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default CabList;
