import React from "react";
import { withRouter, Redirect } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <h1>Welcome Home !</h1>
      {/* {true && <Redirect to="/about" />} */}
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <MyChildComponent />
    </div>
  );
};

export default Home;

const MyChildComponent = withRouter((props) => {
  return (
    <div>
      <h3>Child component !</h3>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
});
