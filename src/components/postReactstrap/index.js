import React from "react";

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Container,
  Row,
  Col,
} from "reactstrap";
const Post = ({ title, text, img }) => {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <Card>
              <CardImg src={img} alt="Card image cap" />
              <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardText>{text}</CardText>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Post;
