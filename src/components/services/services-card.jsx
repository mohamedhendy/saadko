import React, { Component } from "react";

class ServicesCard extends Component {
  state = {};
  render() {
    const { name, image, text } = this.props;
    return (
      <div className='col-md-4 type-glass'>
        <div className='card'>
          <img src={require("../../assets/images/" + image)} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>{name}</h5>
            <p className='card-text'>{text}</p>
            <h5><span>السعر</span> <span className="float-left price">$1000</span> </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesCard;
