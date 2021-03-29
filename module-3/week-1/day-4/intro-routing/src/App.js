import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import Home from "./Views/Home";
import About from "./Views/About";
import Contact from "./Views/Contact";
import NavMain from "./Components/NavMain";
import NotFound from "./Views/NotFound";
import "./App.css";
// import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <NavMain toto="FOOO" />
      {/* <Counter /> */}

      {/* Every <Route /> component will pass history/location/match props to 
        the component passed as prop to the "component" prop
      */}
      <Switch>
        {/*
          exact prop is needed otherwise the path will match with
          any other route that contain the same path
          In this case the "/" component will match "/about" "/contact" etc...
          because the all start with "/"
          Same will happend if you had a route built as so:

          "/user" 
          "/user/account"
           If you dont set the exact prop, the /user route will always be matched
          
         */}
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/about" component={About} /> */}
        <Route
          exact
          path="/about"
          render={(historyProps) => {
            // If you need to pass a prop from parent to child
            // to one of your components, here from App to Home
            // you can use the "render" prop
            return <About myProp={"Any prop"} />;
          }}
        />

        <Route exact path="/contact" component={Contact} />

        {/* If not route is matched, you end up in this route */}
        <Route path="*" component={NotFound} />
      </Switch>

      <footer>My beautiful footer</footer>
    </div>
  );
}

export default App;

/**
 *
 * To enable routing logic all you need are <Switch> and <Route /> components
 *
 *
 * <Switch>
 *    <Route exact path="/where" component={WhatComponentToShow} />
 *    <Route exact path="/somewhereelse" component={WhatComponentToShow} />
 * </Switch>
 */
