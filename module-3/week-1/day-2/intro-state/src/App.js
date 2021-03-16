import logo from "./logo.svg";
import Counter from "./Components/Counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter person="Jimmy" positiveMessage="Hurray" negativeMessage="Bouh" />
      <Counter
        person="Jennifer"
        positiveMessage="Yaay"
        negativeMessage="Naay"
      />
    </div>
  );
}

export default App;
