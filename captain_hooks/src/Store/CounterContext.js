import React, { useState, useContext } from "react";

export const CounterContext = React.createContext();

export const CounterProvider = (props) => {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider
      value={{
        counter,
        setCounter,
      }}
    >
      {props.children}
    </CounterContext.Provider>
  );
};

export const useCounterContext = () => {
  return useContext(CounterContext);
};
