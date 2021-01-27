import React, { Component } from "react";
import "./how-work.css";
import IconsSection from "./icons-section";
class WorksSection extends Component {
  state = {};
  render() {
    const {
      title,
      mainParagraph,
      firstTitle,
      secondTitle,
      lastTitle,
      firstParagraph,
      secondParagraph,
      lastParagraph,
      image
    } = this.props;
    return (
      <div>
        <div className='way'>
          <div className=''>
            <div className='row w-100 mx-0'>
              <div className='col-md-6'>
                <div className='way-content'>
                  <h4>{title}</h4>
                  <p>{mainParagraph}</p>
                  <IconsSection iconTitle={firstTitle} iconParagraph={firstParagraph} />
                  <IconsSection iconTitle={secondTitle} iconParagraph={secondParagraph} />
                  <IconsSection iconTitle={lastTitle} iconParagraph={lastParagraph} />
                </div>
              </div>
              <div className='col-md-6 px-0'>
                <img className='w-100' src={require("../../assets/images/" + image)} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorksSection;
