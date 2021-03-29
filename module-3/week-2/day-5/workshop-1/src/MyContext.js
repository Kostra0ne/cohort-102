import React from "react";

export const MyContext = React.createContext();

class MyProviderWrapper extends React.Component {
  state = {
    name: "Foo",
    counter: 0,
  };

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    const myContextValue = {
      name: this.state.name,
      counter: this.state.counter,
      handleIncrement: this.handleIncrement,
    };

    return (
      <MyContext.Provider value={myContextValue}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProviderWrapper;

export const withMyContextValue = (Component) => {
  return (props) => {
    return (
      <MyContext.Consumer>
        {(theValueFromContext) => {
          return <Component {...props} context={theValueFromContext} />;
        }}
      </MyContext.Consumer>
    );
  };
};
