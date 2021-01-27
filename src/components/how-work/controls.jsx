import React, { Component } from "react";
import "./how-work.css";
class ControlsBtn extends Component {
  state = {};
  render() {
    const { classBtn, text, clicked} = this.props;
    return (
      <button  className={classBtn} onClick={clicked}>
        {text}
      </button>
    );
  }
}

export default ControlsBtn;
