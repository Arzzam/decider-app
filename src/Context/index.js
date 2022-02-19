import React, { Component } from "react";

const list = [
  "Yes",
  "No",
  "Maybe",
  "Not sure..try again",
  "Ask a friend",
  "Ask your Family Members",
];

const MyContext = React.createContext();
class MyProvider extends Component {
  state = {
    screen: 0,
    question: "",
    result: "",
  };

  gotoHandler = (value) => {
    this.setState({ screen: value });
  };

  questionHandler = (value) => {
    this.setState({ question: value });
  };

  getRandomValue = () => {
    return list[Math.floor(Math.random() * list.length)];
  };

  resultHandler = () => {
    let rand = this.getRandomValue();

    if (this.state.result !== "") {
      while (rand === this.state.result) {
        rand = this.getRandomValue();
      }
    }

    this.setState({ result: rand });
  };

  render() {
    return (
      <>
        <MyContext.Provider
          value={{
            state: this.state,
            goTo: this.gotoHandler,
            question: this.questionHandler,
            result: this.resultHandler,
          }}
        >
          {this.props.children}
        </MyContext.Provider>
      </>
    );
  }
}

export { MyProvider, MyContext };
