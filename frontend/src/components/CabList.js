import {React,Fragment,useEffect,useState} from 'react';
import CabCard from './CabCard';
import './CabList.css';
import NavigationBar from './NavigationBar'
import axios from 'axios';

const CabList = () => {
  // const cabs = [
  //   { id: 1, registrationNumber: 'ABC123', model: 'Sedan', colour: 'Black' },
  //   { id: 2, registrationNumber: 'XYZ456', model: 'SUV', colour: 'White' },
  //   { id: 3, registrationNumber: 'DEF789', model: 'Hatchback', colour: 'Red' },
  //   { id: 4, registrationNumber: 'GHI012', model: 'SUV', colour: 'Blue' },
  //   { id: 5, registrationNumber: 'JKL345', model: 'Convertible', colour: 'Silver' },
  //   { id: 6, registrationNumber: 'MNO678', model: 'Sedan', colour: 'Gray' },
  //   { id: 7, registrationNumber: 'PQR901', model: 'SUV', colour: 'Green' },
  //   { id: 8, registrationNumber: 'STU234', model: 'Sedan', colour: 'Yellow' },
  //   { id: 9, registrationNumber: 'VWX567', model: 'Hatchback', colour: 'Orange' },
  //   { id: 10, registrationNumber: 'YZA890', model: 'SUV', colour: 'Purple' },
  // ];

  const [cabDetails, setCabDetails] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/CabDetails')
      .then(response => {
        setCabDetails(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <Fragment>
    <NavigationBar />
    <div className="cab-list">
      <h2 className="list-heading">Cab List</h2>
      <div className="cards-container">
      {cabDetails.map((cab) => (
        
          <CabCard
            key={cab._id}
            registrationNumber={cab.cab_registration_number}
            model={cab.cab_model}
            colour={cab.cab_colour}
          />
        ))}
      </div>
    </div>
    </Fragment>
  );
};

export default CabList;