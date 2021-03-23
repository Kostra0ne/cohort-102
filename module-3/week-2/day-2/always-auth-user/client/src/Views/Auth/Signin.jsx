import React from "react";
import FormSignin from "../../Components/Forms/Auth/FormSignin";
import "../../styles/Signin.css";

const Signin = (props) => {
  console.log(props, "in signin");

  return (
    <div className="Signin">
      <div className="Signin__form">
        <FormSignin handleLogin={props.handleLogin} />
      </div>
      <div className="Signin__welcome">
        <h2>Welcome Back !</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quos
          eaque vero magni. Animi quas et, voluptas, accusantium, fuga obcaecati
          at provident eveniet debitis nesciunt dolor in culpa quae nostrum.
        </p>
      </div>
    </div>
  );
};

export default Signin;
