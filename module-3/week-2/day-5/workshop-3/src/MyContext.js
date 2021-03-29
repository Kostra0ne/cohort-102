import React from "react";

const MyContext = React.createContext();

export default MyContext;

export class MyContextProviderWrapper extends React.Component {
  state = {
    name: "Toto",
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    const myContextValue = {
      name: this.state.name,
      handleChange: this.handleChange,
    };

    return (
      <MyContext.Provider value={myContextValue}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export const withMyContextValue = (Component) => {
  return function (props) {
    return (
      <MyContext.Consumer>
        {(contextValue) => {
          return <Component {...props} contextValue={contextValue} />;
        }}
      </MyContext.Consumer>
    );
  };
};
