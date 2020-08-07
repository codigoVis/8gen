import React, { Component } from "react";

//CSS
class switchExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activate: false,
    };
    this.handleClickSwitch = this.handleClickSwitch.bind(this);
  }
}
