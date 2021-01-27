import React, { Component } from "react";
import "./services.css";
import ServicesCard from "./services-card";
import Intro from "./../intro/intro";
import ServicesCard2 from "./services-card2";
class Services extends Component {
  state = {
    name: "الزجاج الابيض",
    introTitle: "يمكنك الإطلاع على خدماتنا",
    introParagraph: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    image1: "img1.png",
    image2: "img2.png",
    image3: "img3.png",
    image4: "img4.png",
    image5: "img5.png",
    image6: "img6.png",
    image7: "img7.png",
    image8: "img8.png",
    image9: "img9.png",
    text:
      "  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق"
  };
  render() {
    const {
      name,
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      text,
      introTitle,
      introParagraph
    } = this.state;
    return (
      <div className='services'>
        <div className='container'>
          <div className='title-services'>
            <Intro introTitle={introTitle} introParagraph={introParagraph} />
          </div>
          <div className='row'>
            <p className='services-info text-center mb-5'>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص
              العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
              الحروف التى يولدها التطبيق
            </p>
            <ServicesCard image={image1} name={name} text={text} />
            <ServicesCard image={image2} name={name} text={text} />
            <ServicesCard image={image3} name={name} text={text} />
            <ServicesCard2 />
            <ServicesCard image={image4} name={name} text={text} />
            <ServicesCard image={image5} name={name} text={text} />
            <ServicesCard image={image6} name={name} text={text} />
            <div className='col-12'>
              <div className='card mb-3'>
                <img
                  src={require("../../assets/images/school.png")}
                  className='card-img-top'
                  alt='...'
                />
                <div className='card-body'>
                  <h5 className='card-title'>زجاج واجهات الشركات</h5>
                  <p className='card-text'>
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من
                    مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى
                    إضافة إلى زيادة عدد الحروف التى يولدها التطبيق
                  </p>
                  <h5>
                    <span>السعر</span> <span className='float-left price'>$4,000,000</span>{" "}
                  </h5>
                </div>
              </div>
            </div>
            <ServicesCard image={image7} name={name} text={text} />
            <ServicesCard image={image8} name={name} text={text} />
            <ServicesCard image={image9} name={name} text={text} />
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
