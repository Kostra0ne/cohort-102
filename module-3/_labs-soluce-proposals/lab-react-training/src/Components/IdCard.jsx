import React from 'react';
import { formatDate, convertCentimetersToMeters } from '../utils';
import '../styles/IdCard.css';

// export function formatDate(date) {
//   return date.toDateString();
// }
// export function convertCentimetersToMeters(value) {
//   return value / 100;
// }

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="IdCard">
      <div className="IdCard__image-container">
        <img src={picture} alt={`${firstName} ${lastName}`} />
      </div>
      <div className="IdCard__content">
        <p>
          <span className="bold">Firstname:</span> {firstName}{' '}
        </p>
        <p>
          <span className="bold"> LastName:</span> {lastName}
        </p>
        <p>
          <span className="bold">Gender:</span> {gender}
        </p>
        <p>
          <span className="bold">Height: </span>
          {convertCentimetersToMeters(height)} m
        </p>
        <p>
          <span className="bold">Birth:</span> {formatDate(birth)}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
