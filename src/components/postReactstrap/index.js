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
  CardColumns,
} from "reactstrap";
const PostOne = ({ title, text, img }) => {
  return (
    <CardColumns>
      <Container>
        <Row>
          <Col>
            <div>
              <Card className=" text-secondary mt-5">
                <CardImg
                  className="img-fluid w-50 h-50 mx-auto"
                  src={img}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>{title}</CardTitle>
                  <CardText>{text}</CardText>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </CardColumns>
  );
};
export default PostOne;
