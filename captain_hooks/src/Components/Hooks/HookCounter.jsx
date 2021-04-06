import React, { useState } from "react";
import Card, { Title } from "Components/Card";
import Button from "Components/Button";

const HookCounter = () => {
  const [state, setState] = useState({
    counter: 0,
    name: "John in Hook",
  });

  function handleDecrement() {
    setState({ ...state, counter: state.counter - 1 });
  }

  function handleIncrement() {
    // setCounter({ counter: counter + 1 });
    setState({ ...state, counter: state.counter + 1 });
  }

  return (
    <Card className="text-align-center m-2" theme="dark">
      <Title className="h3">Hook Counter</Title>

      <hr />
      <div>
        <Button type="danger" className="m-2" onClick={handleDecrement}>
          Decrement
        </Button>

        <Button type="primary" className="m-2" onClick={handleIncrement}>
          Increment
        </Button>
      </div>

      <h3>Counter value:</h3>
      <p className="hero">{state.name}</p>
      <p className="hero"> {state.counter} </p>
    </Card>
  );
};

export default HookCounter;
