import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { isLoading, isLoggedIn, ...rest } = props;

  if (props.isLoading) {
    return null;
  }

  if (props.isLoggedIn) {
    return <Route {...rest} />;
  } else {
    return <Redirect to="/signin" />;
  }
};

export default ProtectedRoute;
