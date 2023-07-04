import React from "react";
import "../css/Card.css";

const Card = ({ name, idNumber, email, phoneNumber, rating }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">{name}</h2>
        <span className="card-subtitle">ID: {idNumber}</span>
      </div>
      <div className="card-body">
        <p>Email: {email}</p>
        <p>Phone: {phoneNumber}</p>
        <p>Rating: {rating}</p>
      </div>
    </div>
  );
};

export default Card;
