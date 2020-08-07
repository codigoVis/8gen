import React from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
//import data from "./components/Post/Post.json";
import ListPost from "./components/Post";
// Components
import Greet from "./components/classGreet";

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
        <Greet firstName="Melissa" lastName="Castillo" />
        <Greet firstName="Vicente" lastName="Muñoz" />
        <List />
        <ListPost />
      </header>
    </div>
  );
}

export default App;
