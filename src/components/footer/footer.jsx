import React, { Component } from "react";
import "./footer.css";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div className='footer'>
        <div>
          <iframe
            title='our location'
            className='map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1765623.7334886608!2d29.927944623355764!3d30.19473477691022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14368976c35c36e9%3A0x2c45a00925c4c444!2sEgypt!5e0!3m2!1sen!2seg!4v1582938060174!5m2!1sen!2seg'
            width='600'
            height='450'
            frameBorder='0'
            allowFullScreen=''></iframe>
        </div>
        <div>
          <p className='text-center'>&copy; جميع حقوق الطبع محفوظة - سادكو 2020</p>
        </div>
      </div>
    );
  }
}

export default Footer;
