import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import NavMain from "./Components/NavMain";
import Home from "./Views/Home";
import Signin from "./Views/Auth/Signin";
import Signup from "./Views/Auth/Signup";
import Profile from "./Views/Profile";
import ProtectedRoute from "./Components/ProtectedRoute";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    user: null,
    isLoggedIn: false,
    isLoading: true,
  };

  handleLogin = (user) => {
    this.setState({ user: user, isLoggedIn: true }, () => {
      this.props.history.push("/profile");
    });
  };

  // Required for your API calls if you want information on page load
  componentDidMount() {
    axios
      .get("http://localhost:4000/api/auth/current-user", {
        withCredentials: true, // Need to send this for session cookie
      })
      .then((response) => {
        this.setState({
          isLoading: false,
          user: response.data,
          isLoggedIn: true,
        });
        // console.log(response.data, "in component did Mount");
      })
      .catch((error) => {
        this.setState({ isLoading: false });
        console.dir(error);
      });
  }

  handleLogout = () => {
    this.setState({ user: null, isLoggedIn: false });
  };

  render() {
    console.log(this.state, "this is the state");
    return (
      <div className="App">
        <NavMain
          handleLogout={this.handleLogout}
          isLoggedIn={this.state.isLoggedIn}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/signin"
            render={() => {
              return <Signin handleLogin={this.handleLogin} />;
            }}
          />

          <Route exact path="/signup" component={Signup} />

          <ProtectedRoute
            isLoggedIn={this.state.isLoggedIn}
            isLoading={this.state.isLoading}
            exact
            path="/profile"
            render={() => {
              return (
                <Profile
                  user={this.state.user}
                  isLoggedIn={this.state.isLoggedIn}
                />
              );
            }}
          />

          <Route
            render={() => {
              return (
                <div>
                  <h2>404</h2>
                </div>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
