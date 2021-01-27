import React, { Component } from "react";

class Person extends Component {
  state = {};
  render() {
    const { image, PersonTitle, PersonBio } = this.props;
    return (
      <div className='person'>
        <div className='position-relative'>
          <div className='person-img position-relative'>
            <div className='description overlay d-flex justify-content-center text-center text-white flex-column'>
              <div className='des-section'>
                <h5>قسم المبيعات والمشتريات</h5>
                <p className='person-des'>
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                  النص العربى،
                </p>
                <ul className='list-unstyled person-social text-center p-0'>
                  <li className='d-inline-block'>
                    <a href='home'>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                  </li>
                  <li className='d-inline-block'>
                    <a href='home'>
                      <i className='fas fa-envelope'></i>
                    </a>
                  </li>
                  <li className='d-inline-block'>
                    <a href='home'>
                      <i className='fab fa-linkedin-in'></i>
                    </a>
                  </li>
                  <li className='d-inline-block'>
                    <a href='home'>
                      <i className='fab fa-whatsapp'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <img className='w-100' src={require("../../assets/images/" + image)} alt='' />
          </div>
          <div className='text-center email'>
            <i className='far fa-envelope-open'></i>
          </div>
          <div className='text-center team-content'>
            <h5>{PersonTitle}</h5>
            <p>{PersonBio}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Person;
