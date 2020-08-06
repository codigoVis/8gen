import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CardColumns } from "reactstrap";

import Greet from "./components/functionGreet";
import ClassGreet from "./components/classGreet";
import Post from "./components/postReactstrap";
import Clock from "./components/Date";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Clock />
        <Greet firstName="Melissa" lastName="Castillo" />
        <ClassGreet firstName="Vicente" lastName="Muñoz" />
      </header>
      <Post
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBpYf9p2NrionaBi6MuRgUNHnhWOoL9zN5fw&usqp=CAU"
        title="React"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur efficitur diam vel facilisis. Aliquam molestie dapibus est in porta."
      />
      <CardColumns>
        <Post
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-Pz5DNC57W8eF8wEts7ZJD2HcvPKEHMDXZA&usqp=CAU"
          title="React"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur efficitur diam vel facilisis. Aliquam molestie dapibus est in porta."
        />
        <Post
          img="data:image/png;base64,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"
          title="React"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur efficitur diam vel facilisis. Aliquam molestie dapibus est in porta."
        />
        <Post
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXCWw-VHV-wqIzmIUGNO1pBRgAThDw4oumKw&usqp=CAU"
          title="React"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur efficitur diam vel facilisis. Aliquam molestie dapibus est in porta."
        />
      </CardColumns>
    </div>
  );
}

export default App;
