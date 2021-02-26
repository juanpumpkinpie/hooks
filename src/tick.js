import React, { Component } from "react";

export default class Tick extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), color: "#c2c2c2" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Caputured");
  }

  render() {
    return (
      <div onClickCapture={this.handleClick}>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
