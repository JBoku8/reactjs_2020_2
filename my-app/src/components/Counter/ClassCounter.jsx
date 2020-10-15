import React from "react";
import Display from "./Display";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.onPlus = this.onPlus.bind(this);
  }

  onPlus(event) {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  render() {
    return (
      <div>
        <Display count={this.state.count} />
        <button onClick={this.onPlus}>Plus</button>
      </div>
    );
  }
}

export default ClassCounter;
