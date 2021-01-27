import React, { Component } from "react";
import "./intro.css";
class Intro extends Component {
  state = {};
  render() {
    const { introTitle, introParagraph } = this.props;
    return (
      <div className='content'>
        <h2 className='text-center main-h2'>{introTitle}</h2>
        <hr className='main-h2-border' />
        <p className='text-center intro-paragraph'>{introParagraph}</p>
      </div>
    );
  }
}

export default Intro;
