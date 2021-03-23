import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../../../styles/Form.css";
import axios from "axios";

class FormSignup extends Component {
  state = {
    email: "",
    password: "",
    avatar: "",
    username: "",
    message: null,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const userInfo = {
      email: this.state.email,
      password: this.state.password,
      username: this.state.username,
    };

    axios
      .post("http://localhost:4000/api/auth/signup", userInfo)
      .then((response) => {
        this.props.history.push("/signin");
      })
      .catch((error) => {
        console.dir(error);
        this.setState({ message: error.response.data.message });
      });
  };

  render() {
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <h3 className="Form__title">Signup</h3>
        {this.state.message && (
          <div>
            <p>{this.state.message}</p>
          </div>
        )}
        <div className="Form__field">
          <label htmlFor="email">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            autoComplete="off"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </div>
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
        <div className="Form__field">
          <label htmlFor="avatar">Avatar</label>
          <input
            name="avatar"
            id="avatar"
            type="file"
            onChange={this.handleImage}
          />
        </div>
        <div>
          <button className="Form__button">Submit</button>
        </div>
      </form>
    );
  }
}

export default withRouter(FormSignup);
