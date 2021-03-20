import React from 'react';
import '../styles/NumbersTable.css';
/** Solution n°1 */
// const NumbersTable = ({ limit }) => {
//   return (
//     <div className="NumbersTable">
//       {new Array(limit).fill(0).map((cell, index) => (
//         <div
//           key={index}
//           className="cell"
//           style={{ backgroundColor: index % 2 === 0 ? 'red' : 'white' }}
//         >
//           {index + 1}
//         </div>
//       ))}
//     </div>
//   );
// };

/** Solution n°2 */

const NumbersTable = ({ limit }) => {
  const cells = [];

  for (let i = 1; i <= limit; i++) {
    cells.push(
      <div
        style={{ backgroundColor: i % 2 === 0 ? 'red' : 'white' }}
        className="NumbersTable__cell"
      >
        {i}
      </div>
    );
  }

  return <div className="NumbersTable">{cells}</div>;
};

export default NumbersTable;
