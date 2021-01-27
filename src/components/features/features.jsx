import React, { Component } from "react";
import "./features.css";
import Intro from "../intro/intro";
class Features extends Component {
  state = {
    introTitle: "متميزون دائما وبإبداع",
    introParagraph: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة"
  };
  render() {
    const { introTitle, introParagraph } = this.state;
    return (
      <div className='features'>
        <div className=''>
          <Intro introTitle={introTitle} introParagraph={introParagraph} />
          <div className='features-items'>
            <div className='row w-100 mx-0'>
              <div className='col-md-3 col-sm-6'>
                <div className='text-center'>
                  <div className='features-icons text-center'>
                    <i className='far fa-thumbs-up'></i>
                  </div>
                  <h4>السعر</h4>
                  <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                </div>
              </div>
              <div className='col-md-3 col-sm-6'>
                <div className='text-center'>
                  <div className='features-icons text-center'>
                    <i className='fas fa-chart-line'></i>
                  </div>
                  <h4>الجوده العاليه</h4>
                  <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                </div>
              </div>
              <div className='col-md-3 col-sm-6'>
                <div className='text-center'>
                  <div className='features-icons text-center'>
                    <i className='far fa-lightbulb'></i>
                  </div>
                  <h4>الإبداع</h4>
                  <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                </div>
              </div>
              <div className='col-md-3 col-sm-6'>
                <div className='text-center'>
                  <div className='features-icons text-center'>
                    <i className='fas fa-headset'></i>
                  </div>
                  <h4>الدعم </h4>
                  <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
