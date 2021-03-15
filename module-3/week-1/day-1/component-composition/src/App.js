import Box from "./Components/Box";
import Row from "./Components/Row";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Box color="blue" /> */}
      <Box>
        <h1>Hello world</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iusto
          sed minima asperiores commodi voluptatibus provident! Corporis
          numquam, impedit modi molestiae itaque architecto veritatis amet eum
          in qui, dolore asperiores!
        </p>
      </Box>
      <Row>
        <div>Hello</div>
        <div>World</div>
      </Row>
    </div>
  );
}

export default App;
