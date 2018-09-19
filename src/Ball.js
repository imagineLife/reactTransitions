import React, { Component } from "react";
import * as d3 from "d3";

class Ball extends React.PureComponent {
  constructor(props) {
    super();
    this.state = {
      x: props.x
    };
  }
  
  render() {
    const { x, y } = this.state;

    return <circle r="10" cx={x} cy={10} ref={this.circleRef} />;
  }
}

export default Ball;
