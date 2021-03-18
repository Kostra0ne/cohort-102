import React from "react";
import { withRouter } from "react-router-dom";

const About = (props) => {
  const handleRedirect = () => {
    props.history.push("/");
    // Redirecting the user programmaticaly with
    // history.push("/where")
  };

  return (
    <div>
      <h1>Welcome to the About Page</h1>
      <button type="submit" onClick={handleRedirect}>
        Redirect me to the Home page
      </button>
    </div>
  );
};

export default withRouter(About);
/**
 * <Route path="/xxxxx" component={MyComponent} />
 * -----------------------------------^
 *|
 * All these components, here marked as "MyComponent" will inherit
 * "location", "match" "history" props.
 * In the case a Component needs one of these props
 * eg: redirecty programmaticaly, information on the url...
 * You can use the { withRouter } HOC (HigherOrderComponent)
 * That will pass  "location", "match" "history" props that specific component
 *
 * One of the ways to do that is by exporting the component as follows:
 *
 * export default withRouter(MyOtherComponent);
 */
