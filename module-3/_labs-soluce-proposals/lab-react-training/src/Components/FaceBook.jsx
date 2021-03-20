import React from 'react';
import '../styles/FaceBook.css';

import data from '../data/berlin.json';

const FaceBook = () => {
  return (
    <div className="FaceBook">
      {data.map((student, index) => (
        <div className="FaceBook__profile" key={index}>
          <img src={student.img} alt="" />
          <div>
            <p>
              <span className="FaceBook__field">First name:</span>
              {student.firstName}
            </p>
            <p>
              <span className="FaceBook__field">Last name:</span>
              {student.lastName}
            </p>
            <p>
              <span className="FaceBook__field">Country: </span>
              {student.country}
            </p>
            <p>
              <span className="FaceBook__field">Type: </span>
              {student.isStudent ? 'Student' : 'Teacher'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaceBook;
