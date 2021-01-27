import React, { Component } from "react";
import "./header.css";
class Header extends Component {
  state = {};
  render() {
    return (
      <div className='header'>
        <div className='overlay'></div>
        <video autoPlay muted loop id='myVideo'>
          <source src={require("../../assets/videos/work.mp4")} type='video/mp4' />
        </video>
        <div className='container header-content text-white'>
          <h1 className='text-center'> مرحبا بك فى <span className="sadko-title">سادكــو</span> للألومنيوم </h1>
          <p className='text-center'>
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص
            العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى
          </p>
          <div className='video-play text-center'>
            <a
              id='play-video'
              className='video-play-button'
              href='home'
              data-toggle='modal'
              data-target='#staticBackdrop'>
              <span></span>
            </a>
          </div>
        </div>
        <div
          className='modal fade'
          id='staticBackdrop'
          data-backdrop='static'
          tabIndex='-1'
          role='dialog'
          aria-labelledby='staticBackdropLabel'
          aria-hidden='true'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
                <iframe
                  className='video-embed'
                  title='our video'
                  src='https://www.youtube.com/embed/JMGkbrETU8M'
                  frameBorder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
