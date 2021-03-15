//import React from "react"; // Not mandatory anymore since react 17
import YouTube from "react-youtube";
import myLogo from "./assets/logo.svg";

import "./App.css";
import "./styles/global.css"; // importing css

import totoLasticot, { myOtherValue as myOtherValueFromMyFile } from "./myFile";
import React from "react";

const mySurname = "Marmier";

const myFriend = { name: "Lola" };

function displayName(person) {
  return `Hello ${person.name}`;
}

function App() {
  const myName = "Franck";

  const myOtherValue = "Hey People";

  let value;

  if (true) {
    value = "Toto";
  } else {
    value = "Foo";
  }

  const myBoxTextStyling = {
    color: "white",
  };

  const myArray = [];

  for (let i = 0; i < 10; i++) {
    myArray.push(`Hello n°${i}`);
  }

  // After the return you cannot include any statements (if..., for..., switch...) 
  return (
    <div id="Foo" className="App">
      <h1>{displayName(myFriend)}</h1>
      {/* Importing image from src/ folder */}
      <img src={myLogo} alt="" />

      <label htmlFor="name">
        <input id="name" type="text" />
      </label>

      {/* Importing image from public folder */}
      {/* <img src="/images/logo.svg" alt="" />  */}
      <p>Value from myFile.js {totoLasticot}</p>
      <p>Other value from myFile.js: {myOtherValue}</p>
      <p>Other value from myFile.js: {myOtherValueFromMyFile}</p>
      <p>{2 + 2}</p>

      <h3>
        {myName} {mySurname}
      </h3>

      <p>{true ? "Yes" : "No"}</p>
      <p>{!true ? "Yes" : "No"}</p>
      <p>{value}</p>

      <h2>These are rendered to the DOM</h2>

      <ul>
        <li>{0}</li>
        <li>{"d"}</li>
        <li>{["Hello"]}</li>
        <li>{myArray}</li>

        {/* You cannot render objects otherwise it crashed */}
        {/* <li>{{name:"toto"}}</li>  */}
      </ul>

      <h2>These values won't be rendered to the DOM</h2>

      <ul>
        <li>{true}</li>
        <li>{false}</li>
        <li>{null}</li>
        <li>{undefined}</li>
      </ul>

      <h2>Inline styling</h2>

      <div
        style={{
          backgroundColor: false ? "black" : "blue",
          border: "1px solid black",
          borderRadius: 10, // If you dont put a unit, it will be assumed to be "px"
        }}
      >
        <p style={myBoxTextStyling}>Beautiful box</p>
      </div>

      <YouTube videoId="N3AkSS5hXMA" />

      <h2>React Fragment</h2>

      <p>When you don't want a div you can use a react fragment</p>
      {/* <React.Fragment>
        <h2>Hello</h2>
        <h2>World</h2>
      </React.Fragment> */}
      {/* Same as above */}
      <>
        <h2>Hello</h2>
        <h2>World</h2>
      </>

      <button
        onClick={function () {
          console.log("I have been clicked");
        }}
      >
        Click
      </button>
    </div>
  );
}

export default App;

// if() these are considered statements

// if(true){
//   x = 2+1;
// }

// for(i =0; i <10; i++){ // this is a statement
//   // do something
// }
