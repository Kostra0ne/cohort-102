import Avatar from "./Components/Avatar";
import ClassAvatar from "./Components/ClassAvatar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2 className="App__title">Welcome React App !</h2>

      {/* Starting your components with an uppercase letter is mandatory */}
      <Avatar firstName="Myriam" lastName="Mira" age={10} />
      <Avatar title="Ola" firstName="Florian" lastName="Toto" age={20} />
      {/* <ClassAvatar firstName="Foo" lastName="Bar" /> */}
    </div>
  );
}

export default App;
