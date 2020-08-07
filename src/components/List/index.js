import React, { Component } from "react";

// CSS
import "./List.css";
import {
  Container,
  Col,
  Row,
  ListGroupItem,
  ListGroup,
  Badge,
  Button,
} from "reactstrap";

const elements = [
  { text: "Vicente" },
  { text: "Melisa" },
  { text: "Nao" },
  { text: "Ruben" },
];
// const elements = [];
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeList: true,
    };
    this.handleShowListClick = this.handleShowListClick.bind(this);
  }

  handleShowListClick() {
    const { activeList } = this.state;
    this.setState({
      activeList: !activeList,
    });
  }

  render() {
    const { activeList } = this.state;

    let UIElements = elements.map(({ text, img }, index) => {
      const upperText = text.toUpperCase();
      return (
        <ListGroupItem
          onClick={this.handleListItemClick}
          key={index}
          className="List-item"
        >
          {upperText}
        </ListGroupItem>
      );
    });

    /*
      UIElements -> [] -> have a length property
      if (!UIElements.length) -> if(!0) -> if(!false)
      if (!false) -> if (true)
    */

    if (!UIElements.length) {
      UIElements = (
        <h1>
          No hay <Badge color="danger">elementos</Badge>
        </h1>
      );
    }

    return (
      <Container>
        <Row>
          <Col>{activeList ? <ListGroup>{UIElements}</ListGroup> : null}</Col>
          <Button onClick={this.handleShowListClick}>
            {activeList ? "Ocultar lista" : "Mostrar Lista"}
          </Button>
        </Row>
      </Container>
    );
  }
}

export default List;
