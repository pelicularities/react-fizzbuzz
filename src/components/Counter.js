import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initialValue,
    };
  }

  increment = () => {
    this.setState({ value: this.state.value + 1 });
  };

  decrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  fizzbuzz = () => {
    if (this.state.value === 0) {
      return "0";
    } else if (this.state.value % 15 === 0) {
      return "FizzBuzz";
    } else if (this.state.value % 3 === 0) {
      return "Fizz";
    } else if (this.state.value % 5 === 0) {
      return "Buzz";
    } else {
      return this.state.value;
    }
  };

  render() {
    return (
      <div className="container">
        <button onClick={this.decrement}>LESS</button>
        <h1>{this.fizzbuzz()}</h1>
        <button onClick={this.increment}>MORE</button>
      </div>
    );
  }
}

export default Counter;
