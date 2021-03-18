import React from 'react';
import '../styles/CreditCard.css';

// This could come from a configuration file.
const types = {
  Visa: '/img/visa.png',
  'Master Card': '/img/master-card.svg',
};

function CreditCard(props) {
  const {
    type, // Visa
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const divStyles = {
    backgroundColor: bgColor,
    color: color,
  };

  return (
    <div style={divStyles} className="CreditCard">
      <div className="CreditCard__type">
        <img src={types[type]} alt="visa" />
      </div>

      <div className="CreditCard__number">
        •••• •••• •••• {number.substr(-4)}
      </div>

      <div className="CreditCard__info">
        <div>
          Expires {expirationMonth}/{expirationYear.toString().substr(-2)}
        </div>
        <div>{bank}</div>
      </div>

      <div>{owner}</div>
    </div>
  );
}

export default CreditCard;
