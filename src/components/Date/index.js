import React, { Component } from "react";
import { Badge, Container, Button } from "reactstrap";

class Clock extends Component {
  constructor(props) {
    console.log("1. constructor");
    super(props);
    this.state = {
      date: new Date().toLocaleTimeString(),
      color: "danger",
      counter: 1,
      isActive: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString(),
        color: "primary",
      });
    }, 5000);
  }

  handleClick() {
    console.log("color normal");
    let { counter, isActive } = this.state;
    counter = counter + 1;
    console.log(isActive);
    isActive = isActive ? false : true;
    this.setState({
      counter,
      isActive,
    });
  }

  render() {
    let color = this.state.isActive ? "primary" : "info";
    return (
      <>
        <h1>
          <Badge color={color}>{this.state.date}</Badge>
        </h1>
        <h2>
          <Badge color={this.state.color}>Example</Badge>
        </h2>
        <Container>
          <p>{this.state.counter}</p>
          <Button color={color} onClick={this.handleClick}>
            click me!
          </Button>
        </Container>
      </>
    );
  }
}

export default Clock;
