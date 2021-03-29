import { Switch, Route } from "react-router-dom";
import Home from "./Views/Home";
import Guitars from "./Views/Guitars";
import OneGuitar from "./Views/OneGuitar";
import FormGuitar from "./Views/FormGuitar";
import NavMain from "./Components/NavMain";
import "./App.css";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <NavMain />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/guitars/new" component={FormGuitar} />
        <Route exact path="/guitars" component={Guitars} />
        <Route exact path="/guitars/:toto" component={OneGuitar} />
      </Switch>
    </div>
  );
}

export default App;
