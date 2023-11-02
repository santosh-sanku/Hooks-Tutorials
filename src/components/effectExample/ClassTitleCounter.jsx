import React, { Component } from "react";
import PropTypes from "prop-types";

class ClassTitleCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("updating document title");
      document.title = `Clicked ${this.state.count} times`;
    }
  }

  /* Here when we type anything tin the input field , 
  document.title is not updated, so we are conditionally updating the title
  only when appropriate variable changes i.e only when count value changes */

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <div onClick={() => this.setState({ count: this.state.count + 1 })}>
          <button>Click {this.state.count} times</button>
        </div>
      </div>
    );
  }
}

export default ClassTitleCounter;
