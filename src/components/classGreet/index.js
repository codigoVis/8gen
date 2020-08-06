import React, { Component } from "react";

class ClassGreet extends Component {
  render() {
    return (
      <p>
        Hola
        {this.props.firstName}
        {this.props.lastName}
      </p>
    );
  }
}

export default ClassGreet;
