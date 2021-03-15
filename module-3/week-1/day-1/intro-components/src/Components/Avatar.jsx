import React from "react"; // Snippet shortcut => rafce | rfce
import "../styles/Avatar.css";

function Avatar(props) {
  console.log(props);

  //   if (props.age < 20) return null;

  return (
    <div className="Avatar">
      <h1 className="Avatar__title">{props.title}</h1>
      <p>
        {props.firstName.toUpperCase()} {props.lastName.toUpperCase()}
      </p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Avatar;

// function sum(a, b) {
//   return a + b;
// }

// sum(1, 2); // 3
// sum(3, 4); // 7
