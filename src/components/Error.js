import React, { Component } from "react";

class Error extends Component {
  state = {
    stuff: null,
    err: null
  };

  componentDidMount = () => {
    this.getContent();
  };

  getContent = () => {};

  render() {
    return <div />;
  }
}

export default Error;
