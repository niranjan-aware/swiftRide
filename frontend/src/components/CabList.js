import {React,Fragment} from 'react';
import CabCard from './CabCard';
import './CabList.css';
import NavigationBar from './NavigationBar'

const CabList = () => {
  const cabs = [
    { id: 1, registrationNumber: 'ABC123', model: 'Sedan', colour: 'Black' },
    { id: 2, registrationNumber: 'XYZ456', model: 'SUV', colour: 'White' },
    { id: 3, registrationNumber: 'DEF789', model: 'Hatchback', colour: 'Red' },
    { id: 4, registrationNumber: 'GHI012', model: 'SUV', colour: 'Blue' },
    { id: 5, registrationNumber: 'JKL345', model: 'Convertible', colour: 'Silver' },
    { id: 6, registrationNumber: 'MNO678', model: 'Sedan', colour: 'Gray' },
    { id: 7, registrationNumber: 'PQR901', model: 'SUV', colour: 'Green' },
    { id: 8, registrationNumber: 'STU234', model: 'Sedan', colour: 'Yellow' },
    { id: 9, registrationNumber: 'VWX567', model: 'Hatchback', colour: 'Orange' },
    { id: 10, registrationNumber: 'YZA890', model: 'SUV', colour: 'Purple' },
  ];

  return (
    <Fragment>
    <NavigationBar />
    <div className="cab-list">
      <h2 className="list-heading">Cab List</h2>
      <div className="cards-container">
        {cabs.map((cab) => (
          <CabCard
            key={cab.registrationNumber}
            registrationNumber={cab.registrationNumber}
            model={cab.model}
            colour={cab.colour}
          />
        ))}
      </div>
    </div>
    </Fragment>
  );
};

export default CabList;

