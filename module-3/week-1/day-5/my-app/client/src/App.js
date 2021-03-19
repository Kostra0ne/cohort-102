import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import Home from "./Views/Home";
import Guitars from "./Views/Guitars";
import OneGuitar from "./Views/OneGuitar";
import "./App.css";
import NavMain from "./Components/NavMain";

function App() {
  return (
    <div className="App">
      <NavMain />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/guitars" component={Guitars} />
        <Route exact path="/guitars/:toto" component={OneGuitar} />
      </Switch>
    </div>
  );
}

export default App;
