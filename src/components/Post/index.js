import React, { Component } from "react";
import { CardColumns } from "reactstrap";
const dataPost = [
  {
    img: "Imagen 1",
    titulo: "Titulo 1",
    text: "text 1",
  },
  {
    img: "Imagen 2",
    titulo: "Titulo 2",
    text: "text 2",
  },
  {
    img: "Imagen 3",
    titulo: "Titulo 3",
    text: "text 3",
  },
];

class Post extends Component {
  render() {
    const ArrayElement = dataPost.map(({ element }, index) => {
      const upperText = element.toUpperCase();
      return (
        <CardColumns key={index} className="card">
          {upperText}
        </CardColumns>
      );
    });
  }
}
console.log(Post);
