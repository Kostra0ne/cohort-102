import React from 'react';

// This can come from a configuration file.
const maxStars = 5;

const Rating = ({ children }) => {
  const rating = Math.round(Number(children));

  const stars = [];

  for (let i = 0; i < maxStars; i++) {
    if (i < rating) {
      stars.push(<span key={i}>★</span>);
    } else {
      stars.push(<span key={i}>☆</span>);
    }
  }

  return <div className="Rating">{stars}</div>;
};

export default Rating;
