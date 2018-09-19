import React from "react";
import { render } from "react-dom";

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <h2>Begin!</h2>
        <p>Test hot-reloading</p>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
