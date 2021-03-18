import React from 'react';
import Rating from './Rating';
import '../styles/DriverCard.css';

const DriverCard = (props) => {
  return (
    <div className="DriverCard">
      <div className="DriverCard__image">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="DriverCard__content">
        <h2 className="DriverCard__name">{props.name}</h2>
        <h3 className="DriverCard__rating">
          <Rating>{props.rating}</Rating>
        </h3>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
