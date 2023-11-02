import React, { Component } from "react";

class IntervalClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componetDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  // created an interval timer that runs every second.
  // and every second we execute the tick method.

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  /* timer also need to be cleared, in order to 
  avoid memory leaks.
  */

  tick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  // the tick method increase the count value by 1.

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

export default IntervalClassCounter;
