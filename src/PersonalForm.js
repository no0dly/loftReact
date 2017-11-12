import React, { Component } from "react";
import Title from "./Title";
import "./PersonalForm.css";

export class PersonalForm extends Component {
  handleChangeForm = e => {
    this.props.onChangeForm(e.target.name, e.target.value);
  };
  render() {
    return (
      <div>
        <Title>Персональная информация</Title>
        <div className="personal-form">
          <input
            onChange={this.handleChangeForm}
            type="text"
            name="firstName"
          />
          <input onChange={this.handleChangeForm} type="text" name="lastName" />
          <input onChange={this.handleChangeForm} type="text" name="email" />
        </div>
      </div>
    );
  }
}

export default PersonalForm;
