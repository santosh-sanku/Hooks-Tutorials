import React, { Component } from "react";
import PropTypes from "prop-types";

class ClassTitleCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    document.title = `Clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div onClick={() => this.setState({ count: this.state.count + 1 })}>
        <button>Click {this.state.count} times</button>
      </div>
    );
  }
}

export default ClassTitleCounter;
