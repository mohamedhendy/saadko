import React, { Component } from "react";
import "./clients.css";
import Client from "./client";
import Intro from "../intro/intro";
class Clients extends Component {
  state = {
    introTitle: "بعض التوصيات من عملائنا",
    introParagraph: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    image: "client1.png",
    name: "أشرف ابو العربى",
    company: "شركة كواريك المعاصر",
    image2: "client2.png",
    name2: "السيد شحتة",
    company2: "شركة مزارع الصحبة",
    image3: "client3.png",
    name3: "حموده الشرقاوى",
    company3: "مؤسسة الفناط",
    feedBack:
      "            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلععلى صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة"
  };
  render() {
    const { introTitle, introParagraph, image, name, company, feedBack, image2, name2, company2, image3, name3, company3  } = this.state;
    return (
      <div className='container clients'>
        <div>
          <Intro introTitle={introTitle} introParagraph={introParagraph} />
        </div>
        <div id='carouselExampleIndicators' className='carousel slide' data-ride='carousel'>
          <ol className='carousel-indicators'>
            <li data-target='#carouselExampleIndicators' data-slide-to='0' className='active'></li>
            <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
            <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
          </ol>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <Client image={image} name={name} company={company} feedBack={feedBack} />
            </div>
            <div className='carousel-item'>
              <Client image={image2} name={name2} company={company2} feedBack={feedBack} />
            </div>
            <div className='carousel-item'>
              <Client image={image3} name={name3} company={company3} feedBack={feedBack} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Clients;
