import React, { Component } from "react";

import Input from "../../../../components/input";
import "./FormKoder.css";
//import Koder from "../..";
class FormNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      users: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    console.log("Componente montado correctamente");
    fetch("https://reactsessions-ac545.firebaseio.com/.json")
      .then((response) => {
        return response.json();
      })
      .then(({ users }) => {
        let parsedUsers = [];
        for (let key in users) {
          let user = users[key];
          user["key"] = key;
          parsedUsers.push(user);
        }
        if (parsedUsers) {
          this.setState({
            users: parsedUsers,
          });
          console.log(this.state.users);
        }
      });
  }

  handleInputChange(name, value) {
    this.setState({
      [name]: value,
    });
  }
  handleSendKoder(firstName, lastName, age) {
    console.log(firstName, lastName, age);
    fetch("https://reactsessions-ac545.firebaseio.com/users.json", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        firstName,
        lastName,
        age,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          firstName: "",
          lastName: "",
          age: "",
        });
        console.log("koder guardado");
        console.log(data);
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { firstName, lastName, age } = this.state;
    this.setState({
      firstName: firstName,
      lastName: lastName,
      age: age,
    });
    console.log("enviando");
    console.log(this.state);
    this.handleSendKoder(firstName, lastName, age);
  }

  handleInputChange(name, value) {
    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Firs name:
          <Input
            value={this.state.firstName}
            name="firstName"
            callback={this.handleInputChange}
          ></Input>
          <Input
            value={this.state.lastName}
            name="lastName"
            callback={this.handleInputChange}
          ></Input>
          <Input
            value={this.state.age}
            name="age"
            callback={this.handleInputChange}
          ></Input>
          <button type="submit">Click</button>
        </form>
        {this.state.users.map((Koder) => (
          <li>
            <ul>
              {Koder.firstName}
              {Koder.lastName}
              {Koder.age}
            </ul>
          </li>
        ))}
      </div>
    );
  }
}
export default FormNote;
