import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import GuitarList from "./Components/GuitarList";
import GuitarDetails from "./Components/GuitarDetails";

function App() {
  return (
    <div className="App">
      <GuitarList />
      <Switch>
        <Route
          path="/guitars/:uuid"
          render={(historyProps) => {
            return <GuitarDetails {...historyProps} />;
          }}
          // component={GuitarDetails}
        />
      </Switch>
    </div>
  );
}

export default App;
