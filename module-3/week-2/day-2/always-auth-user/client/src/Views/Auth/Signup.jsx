import React from "react";
import FormSignup from "../../Components/Forms/Auth/FormSignup";
import "../../styles/Signup.css";

const Signup = (props) => {
  return (
    <div className="Signup">
      <div className="Signup__form">
        <FormSignup handleLogin={props.handleLogin} />
      </div>
      <div className="Signup__welcome">
        <h2>Hello</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
          inventore sequi eos repellendus voluptatum temporibus blanditiis
          aperiam est repellat commodi asperiores molestiae voluptatibus
          possimus impedit esse recusandae veniam modi magni?
        </p>
      </div>
    </div>
  );
};

export default Signup;
