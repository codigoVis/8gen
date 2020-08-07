import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import PostOne from "../postReactstrap/index";
const arrayPost = [
  {
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-Pz5DNC57W8eF8wEts7ZJD2HcvPKEHMDXZA&usqp=CAU",
    title: "React",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur efficitur diam vel facilisis. Aliquam molestie dapibus est in porta.",
  },
  {
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-Pz5DNC57W8eF8wEts7ZJD2HcvPKEHMDXZA&usqp=CAU",
    title: "React",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur efficitur diam vel facilisis. Aliquam molestie dapibus est in porta.",
  },
  {
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-Pz5DNC57W8eF8wEts7ZJD2HcvPKEHMDXZA&usqp=CAU",
    title: "React",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur efficitur diam vel facilisis. Aliquam molestie dapibus est in porta.",
  },
];
class ListPost extends Component {
  printPoust() {
    return arrayPost.map(({ img, title, text }) => (
      <PostOne img={img} title={title} text={text} />
    ));
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>{this.printPoust()}</Col>
        </Row>
      </Container>
    );
  }
}
export default ListPost;
