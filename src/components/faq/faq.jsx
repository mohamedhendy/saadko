import React, { Component } from "react";
import "./faq.css";
import Intro from "./../intro/intro";
class FAQ extends Component {
  state = {
    introTitle: "الأسئلة الشائعة",
    introParagraph: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    answer:
      " هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلععلى صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة"
  };
  render() {
    const { introTitle, introParagraph, answer } = this.state;
    return (
      <div className='container-fluid faq'>
        <Intro introTitle={introTitle} introParagraph={introParagraph} />
        <div className='row faq-content'>
          <div className='col-md-5 p-0 position-relative'>
            <div className='overlay faq-over'></div>
            <img className='w-100' src={require("../../assets/images/support.png")} alt='' />
            <div className='video-play text-center position-absolute faq-video-btn'>
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
          <div className='col-md-7'>
            <div className='accordion' id='accordionExample'>
              <div className='card'>
                <div className='card-header' id='headingOne'>
                  <h2 className='mb-0'>
                    <button
                      className='btn btn-link'
                      type='button'
                      data-toggle='collapse'
                      data-target='#collapseOne'
                      aria-expanded='true'
                      aria-controls='collapseOne'>
                      <span>1</span> ما هى الخطة لعام 2021 ؟ <i className='fas fa-angle-down'></i>
                    </button>
                  </h2>
                </div>

                <div
                  id='collapseOne'
                  className='collapse show'
                  aria-labelledby='headingOne'
                  data-parent='#accordionExample'>
                  <div className='card-body'>{answer}</div>
                </div>
              </div>
              <div className='card'>
                <div className='card-header' id='headingTwo'>
                  <h2 className='mb-0'>
                    <button
                      className='btn btn-link collapsed'
                      type='button'
                      data-toggle='collapse'
                      data-target='#collapseTwo'
                      aria-expanded='false'
                      aria-controls='collapseTwo'>
                      <span>2</span> ماهى المميزات عند الحصول على كميات كبيرة ؟
                      <i className='fas fa-angle-down'></i>
                    </button>
                  </h2>
                </div>
                <div
                  id='collapseTwo'
                  className='collapse'
                  aria-labelledby='headingTwo'
                  data-parent='#accordionExample'>
                  <div className='card-body'>{answer}</div>
                </div>
              </div>
              <div className='card'>
                <div className='card-header' id='headingThree'>
                  <h2 className='mb-0'>
                    <button
                      className='btn btn-link collapsed'
                      type='button'
                      data-toggle='collapse'
                      data-target='#collapseThree'
                      aria-expanded='false'
                      aria-controls='collapseThree'>
                      <span>3</span> كم عدد الايام التى يسمح بإرجاع المنتج ؟
                      <i className='fas fa-angle-down'></i>
                    </button>
                  </h2>
                </div>
                <div
                  id='collapseThree'
                  className='collapse'
                  aria-labelledby='headingThree'
                  data-parent='#accordionExample'>
                  <div className='card-body'>{answer}</div>
                </div>
              </div>
              <div className='card'>
                <div className='card-header' id='headingFour'>
                  <h2 className='mb-0'>
                    <button
                      className='btn btn-link collapsed'
                      type='button'
                      data-toggle='collapse'
                      data-target='#collapseFour'
                      aria-expanded='false'
                      aria-controls='collapseFour'>
                      <span>4</span> ما هى الإضافات الجديدة للشركة ؟
                      <i className='fas fa-angle-down'></i>
                    </button>
                  </h2>
                </div>
                <div
                  id='collapseFour'
                  className='collapse'
                  aria-labelledby='headingFour'
                  data-parent='#accordionExample'>
                  <div className='card-body'>{answer}</div>
                </div>
              </div>
              <div className='card'>
                <div className='card-header' id='headingFive'>
                  <h2 className='mb-0'>
                    <button
                      className='btn btn-link collapsed'
                      type='button'
                      data-toggle='collapse'
                      data-target='#collapseFive'
                      aria-expanded='false'
                      aria-controls='collapseFive'>
                      <span>5</span> طرق الحصول على عضوية مميزة ؟
                      <i className='fas fa-angle-down'></i>
                    </button>
                  </h2>
                </div>
                <div
                  id='collapseFive'
                  className='collapse'
                  aria-labelledby='headingFive'
                  data-parent='#accordionExample'>
                  <div className='card-body'>{answer}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQ;
