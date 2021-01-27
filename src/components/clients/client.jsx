import React, { Component } from "react";

class Client extends Component {
  state = {};
  render() {
    const { image, name, company, feedBack } = this.props;
    return (
      <div className='row'>
        <div className='col-md-3  '>
          <div className='client-img'>
            <img src={require("../../assets/images/" + image)} alt='' />
          </div>
        </div>
        <div className='col-md-8 client-words'>
          <div className='quote'>
            <i className='fas fa-quote-left'></i>
          </div>
          <p className='feed-back'>{feedBack}</p>
          <h5>{name}</h5>
          <p>{company}</p>
        </div>
      </div>
    );
  }
}

export default Client;
