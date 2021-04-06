import React, { useState, useEffect } from "react";

const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    setInterval(() => {
      setCounter((c) => c + 1);
    }, 1000);
  }, []);

  return counter;
};

export default useCounter;
