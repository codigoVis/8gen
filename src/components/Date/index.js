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
    };
    this.handleClick = this.handleClick.bind(this);
    this.firstStateClick = this.firstStateClick.bind(this);
    this.nextStateClick = this.nextStateClick.bind(this);
  }
  firstStateClick() {
    this.setState({ counter: true });
  }
  nextStateClick() {
    this.setState({ counter: false });
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
    let { counter } = this.state;
    counter = counter + 1;
    this.setState({
      counter,
    });
  }

  render() {
    return (
      <>
        <h1>{this.state.date}</h1>
        <h2>
          <Badge color={this.state.color}>Example</Badge>
        </h2>

        <Container>
          <p>{this.state.counter}</p>
          <Button onClick={this.handleClick}>click me!</Button>
        </Container>
      </>
    );
  }
}

export default Clock;
