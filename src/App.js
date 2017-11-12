import React, { Component } from "react";
import "./App.css";
import Step from "./Step";
import CardForm from "./CardForm";
import PersonalForm from "./PersonalForm";

const stepTitles = ["Personal information", "Card information", "Finish"];

class App extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    isTimeOver: false
  };
  handleClickNextForm = e => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  handleTabClick = number => {
    this.setState({
      step: number
    });
  };
  handleChangeForm = (name, value) => {
    this.setState({
      [name]: value
    })
  };
  handleChangeTimeOver = (value) => {
    const { isTimeOver } = this.state;
    this.setState({
      isTimeOver: value
    })
  };
  isFormCommitable = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;
    switch (step) {
      case 1:
        if ( firstName !== '' && lastName !== '' && email !== '' && email.includes('@') ) {
          return true;
        } else if ( firstName === '' && lastName !== '' && email !== '' && email.includes('@') ) {
          return false;
        } else {
          return false;
        }

      case 2:
        return cardNumber.length === 16;
      case 3:
        return false;
    }
  };
  renderSteps = () => {
    const stepNumber = this.state.step;
    return stepTitles.map((step, idx) => {
      const currentStep = idx + 1;
      return (
        <Step
          key={step}
          onClick={ this.handleTabClick }
          isSelected={currentStep === stepNumber}
          number={currentStep}
          isClickable={currentStep !== stepNumber}
        >
          { step }
        </Step>
      );
    });
  };
  renderForm = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;
    switch (step) {
      case 1:
        return <PersonalForm
          firstName={firstName}
          lastName={lastName}
          email={email}
          onChangeForm={this.handleChangeForm}
        />

      case 2:
        return <CardForm
          cardNumber={cardNumber}
          onChangeForm={this.handleChangeForm} onChangeTimeOver={this.handleChangeTimeOver}
        />

      case 3:
        return 'Поздравляем!'
    }
  };
  render() {
    const { isTimeOver } = this.state;
    return (
      <div className="container">
        <div className="tab-panel">
          {this.renderSteps()}
        </div>
        <div className="form-content">
          {this.renderForm()}
        </div>
        <div className="button-panel">
          <button
            className="button-next"
            onClick={this.handleClickNextForm}
            disabled={ !this.isFormCommitable() || isTimeOver }
          >
            next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
