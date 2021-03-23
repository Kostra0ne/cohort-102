import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "../../../styles/Form.css";
import service from "../../../api";

class FormSignin extends Component {
  state = {
    email: "toto@gmail.com",
    password: "toto",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const userInfo = {
      email: this.state.email,
      password: this.state.password,
    };
    //Submit
    // axios
    //   .post("http://localhost:4000/api/auth/signin", userInfo, {
    //     withCredentials: true, // Needed to forward the cookie sent from the api
    //   })
    // service
    //   .signup("/auth/signin")
    service
      .signup(userInfo)
      .then((response) => {
        console.log(response.data);
        this.props.handleLogin(response.data);
        // this.props.history.push("/profile");
      })
      .catch((error) => {
        console.dir(error);
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <h3 className="Form__title">Signin</h3>

        <div className="Form__field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="off"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div className="Form__field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <button className="Form__button">Submit</button>
        </div>
      </form>
    );
  }
}

export default withRouter(FormSignin);
