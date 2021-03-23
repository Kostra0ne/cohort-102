import { Switch, Route } from "react-router-dom";
import Home from "./Views/Home";
import TotoList from "./Views/TotoList";
import FormEditToto from "./Views/FormEditToto";
import NavMain from "./Components/NavMain";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/toto/list" component={TotoList} />
        <Route exact path="/toto/:id/edit" component={FormEditToto} />
      </Switch>
    </div>
  );
}

export default App;
