import React from "react";
import { Redirect } from "react-router-dom";

const Profile = (props) => {
  if (!props.isLoggedIn) {
    return <Redirect to="/signin" />;
  }

  return (
    <div>
      <h1>Welcome to your profile !</h1>
    </div>
  );
};

export default Profile;
