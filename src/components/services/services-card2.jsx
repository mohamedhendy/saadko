import React, { Component } from "react";

class ServicesCard2 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className='col-md-6'>
          <div className='card mb-3  '>
            <div className='row no-gutters  w-100 '>
              <div className='col-md-6 '>
                <img className='w-100' src={require("../../assets/images/build.png")} alt='...' />
              </div>
              <div className='col-md-6'>
                <div className='card-body'>
                  <h5 className='card-title'>زجاج المنشئات</h5>
                  <p className='card-text'>
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من
                    مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى
                    إضافة إلى زيادة عدد الحروف التى يولدها التطبيق
                  </p>
                  <h5>
                    <span>السعر</span> <span className='float-left price'>$1000</span>{" "}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6 '>
          <div className='card mb-3 '>
            <div className='row no-gutters  w-100'>
              <div className='col-md-6'>
                <div className='card-body'>
                  <h5 className='card-title'>زجاج المنشئات</h5>
                  <p className='card-text'>
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من
                    مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى
                    إضافة إلى زيادة عدد الحروف التى يولدها التطبيق
                  </p>
                  <h5>
                    <span>السعر</span> <span className='float-left price'>$1000</span>{" "}
                  </h5>
                </div>
              </div>
              <div className='col-md-6  '>
                <img className='w-100' src={require("../../assets/images/build2.png")} alt='...' />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ServicesCard2;
