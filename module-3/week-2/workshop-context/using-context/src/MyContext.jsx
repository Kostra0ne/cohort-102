import React from "react";

export const MyContext = React.createContext();

class MyContextProvider extends React.Component {
  state = {
    name: "toto",
    counter: 0,
  };

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    const myValue = {
      name: this.state.name,
      counter: this.state.counter,
      incrementCounter: this.incrementCounter,
    };

    return (
      <MyContext.Provider value={myValue}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export const withMyContext = (Component) => {
  return (props) => {
    return (
      <MyContext.Consumer>
        {(contextValue) => {
          return <Component {...props} myContextValue={contextValue} />;
        }}
      </MyContext.Consumer>
    );
  };
};

export default MyContextProvider;
