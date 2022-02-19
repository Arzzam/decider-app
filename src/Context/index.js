import React, { Component } from "react";

const MyContext = React.createContext();
class MyProvider extends Component {
  state = {
    screen: 0,
    question: "",
  };

  gotoHandler = (value) => {
    this.setState({ screen: value });
  };

  questionHandler = (value) => {
    this.setState({ question: value });
  };

  render() {
    return (
      <>
        <MyContext.Provider
          value={{
            state: this.state,
            goTo: this.gotoHandler,
            question: this.questionHandler,
          }}
        >
          {this.props.children}
        </MyContext.Provider>
      </>
    );
  }
}

export { MyProvider, MyContext };
