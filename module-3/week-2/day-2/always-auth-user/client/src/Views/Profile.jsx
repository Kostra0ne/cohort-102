import React from "react";
import { Redirect } from "react-router-dom";

const Profile = (props) => {
  console.log(props);
  // if (!props.isLoggedIn) {
  //   return <Redirect to="/signin" />;
  // }  // Not needed since Profile is called by ProtectedRoute component

  return (
    <div>
      <h1>Welcome to your profile {props.user.username} !</h1>
    </div>
  );
};

export default Profile;
