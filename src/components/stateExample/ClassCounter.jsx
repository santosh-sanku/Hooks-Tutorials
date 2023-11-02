import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>ClassBased useState Hook Example</h1>
        <button onClick={this.incrementCount}>
          Count = {this.state.count}
        </button>
        <p>
          1. Create a component i.e class component
          <br />
          2. Create a state variable "count" & initialize it to 0
          <br />
          3. Create a method, the is capable to set the state value
        </p>
      </div>
    );
  }
}

export default ClassCounter;
