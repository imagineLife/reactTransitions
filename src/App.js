import React from "react";
import { render } from "react-dom";
import Ball from "./Ball";

class App extends React.Component {
  constructor(props){

  	super(props);

  	this.state = {
      ballLeft : true
	  };

    // this.ballJump = this.ballJump.bind(this);
  };

  const test = 'test';

  render() {
    const { ballLeft } = this.state;
    return (
      <div>
        <svg style={{ width: "300", height: "300px" }} onClick={this.ballJump}>
          <Ball x={ballLeft ? 15 : 250} />
        </svg>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
