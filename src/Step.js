import React, { PureComponent } from "react";
import "./Step.css";

class Step extends PureComponent {
  handleClick = () => {
    // e.preventDefault();

    const { isClickable, onClick, number } = this.props;
    if (isClickable) {
      onClick(number);
    }
  };
  render() {
    const { isSelected, number, isClickable } = this.props;
    return (
      <a
        href="#"
        className={`step ${isSelected ? "step-selected" : ""} ${isClickable
          ? "step-clickable"
          : ""}`}
        onClick={this.handleClick}
      >
        <div className="step__number">{number}</div>
        <div className="step__title">{this.props.children}</div>
      </a>
    );
  }
}

export default Step;
