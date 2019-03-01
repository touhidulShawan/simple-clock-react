import React, { Component } from "react";
import "../assets/css/Clock.css";

class Clock extends Component {
  state = {
    time: new Date()
  };

  handletime() {
    this.setState({ time: new Date() });
  }

  componentWillMount() {
    setInterval(() => this.handletime(), 1000);
  }

  render() {
    return (
      <div className="Clock">
        <h2>{this.state.time.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
