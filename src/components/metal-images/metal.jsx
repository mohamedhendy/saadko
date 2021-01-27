import React, { Component } from "react";
import "./metal.css";
class Metal extends Component {
  state = {};
  render() {
    return (
      <div className='row w-100 mx-0'>
        <div className='col-md-4 mx-0 px-0'>
          <img className='w-100' src={require("../../assets/images/construction.png")} alt='' />
        </div>
        <div className='col-md-4 mx-0 px-0'>
          <img className='w-100' src={require("../../assets/images/welding.png")} alt='' />
        </div>
        <div className='col-md-4 mx-0 px-0'>
          <img className='w-100' src={require("../../assets/images/construction2.png")} alt='' />
        </div>
      </div>
    );
  }
}

export default Metal;
