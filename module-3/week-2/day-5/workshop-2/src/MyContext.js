import React from "react";

export const MyContext = React.createContext();

class MyContextProviderWrapper extends React.Component {
  state = {
    name: "Tototobar",
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

export default MyContextProviderWrapper;

export const withMySexyContextValue = (Component) => {
  return (props) => (
    <MyContext.Consumer>
      {(theContextValue) => {
        return <Component {...props} context={theContextValue} />;
      }}
    </MyContext.Consumer>
  );
};
