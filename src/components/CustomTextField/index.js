import React, { Component } from "react";

// Material UI Components
// import { withStyles } from "@material-ui/core/styles";
// import { styled } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

// CSS
import "./CustomTextField.css";

class CustomTextField extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.props.callback(name, value);
  }

  render() {
    const { value, name, label } = this.props;
    return (
      <TextField
        className="input"
        variant="outlined"
        value={value}
        name={name}
        label={label}
        onChange={this.handleChange}
      />
    );
  }
}

export default CustomTextField;
