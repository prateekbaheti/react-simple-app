import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    setInterval(() => (this.timer = this.setState({ date: new Date() })), 1000);
  }

  componentDidUnMount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
