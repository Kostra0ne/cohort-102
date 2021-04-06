import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { CounterProvider } from "Store/CounterContext";

ReactDOM.render(
  <Router>
    <CounterProvider>
      <App />
    </CounterProvider>
  </Router>,
  document.getElementById("root")
);
