import React, { useState, useEffect } from "react";
import Container from "Components/Container";
// import Button from "Components/Button";

const Dependencies = (props) => {
  const [name, setName] = useState("John");
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };
  
  /**
   * This effect runs after the first render and every single time
   * state / props change !
   */
  useEffect(() => {
    console.log("I am in the effect !");
    // setName("Toto");
  });

  /**
   * This effect runs after the first render and only once
   *
   */
  useEffect(() => {
    console.log("I am the second useEffect !");
    setTimeout(() => {
      setName("Toto");
    }, 2000);
  }, []);

  useEffect(() => {
    let intervalId = setInterval(() => {
      // console.log("wohoooooo");
      console.log(counter, "i am counter value");
      setCounter(counter + 1);
      // setCounter((value) => {
      //   console.log(value, "i am the value !");
      //   return value + 1;
      // });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [counter]);

  /**
   * This effect runs after the first render and every single time the
   * counter value changes.
   */
  // useEffect(() => {
  //   console.log("I am updating !");

  //   return () => {
  //     console.log("I am running when the effect is reran");
  //   };
  // }, [counter]);

  /**
   * This effect will run once and only once after the first render
   * and when the component unmounts the function that you return will
   * be called automatically
   */

  useEffect(() => {
    console.log("I am another effect !");

    return () => {
      console.log("I am unmounting !!!!!!!!!!!!!!!!!!!!!!!!!");
    };
  }, []);

  // console.log("I am out of an effect !");
  return (
    <Container className="text-align-center">
      <h2>{counter}</h2>
      <button onClick={increment}>Click</button>
      <h2>{name}</h2>
      <input
        className="input "
        type="text"
        value={name}
        onChange={handleChange}
      />
    </Container>
  );
};

export default Dependencies;
