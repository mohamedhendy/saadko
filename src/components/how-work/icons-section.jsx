import React, { Component } from "react";
import './how-work.css'
class IconsSection extends Component {
  state = {};
  render() {
    const { iconTitle, iconParagraph } = this.props;
    return (
      <div className='check-content'>
        <h5>
          <i className='far fa-check-circle'></i> {iconTitle}
        </h5>
        <p> {iconParagraph}</p>
      </div>
    );
  }
}

export default IconsSection;
