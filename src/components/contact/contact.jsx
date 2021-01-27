import React, { Component } from "react";
import "./contact.css";
import Intro from "../../components/intro/intro";
class Contact extends Component {
  state = {
    introTitle: "تواصل معنا",
    introParagraph: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة"
  };
  render() {
    const { introTitle, introParagraph } = this.state;
    return (
      <div className='container contacts'>
        <Intro introTitle={introTitle} introParagraph={introParagraph} />
        <h3>يسعدنا ويشرفنا التواصل معك </h3>
        <div className='row'>
          <div className='col-md-8'>
            <div className='contact'>
              <form
                action=''
                method='post'
                encType='text/plain'>
                <div className='form-group'>
                  <input
                    name='الاسم الكريم :'
                    type='text'
                    required
                    className='form-control'
                    placeholder='الإسم الكريم*'
                  />
                </div>
                <div className='d-flex justify-content-between name-number'>
                  <div className='form-group'>
                    <input
                      name='الايميل'
                      type='email'
                      required
                      className='form-control'
                      placeholder='البريد الإلكترونى*'
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      name='رقم التليفون'
                      type='number'
                      className='form-control'
                      placeholder='رقم التليفون'
                    />
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    required
                    name="الرسالة"
                    className='form-control'
                    placeholder='اترك رسالتك*'
                    cols='30'
                    rows='10'></textarea>
                </div>
                <button className='btn-msg' type='submit'>
                  أرسل رسالتك <i className='fab fa-telegram-plane'></i>
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-4 '>
            <div className='side'>
              <h5>مكان العمل </h5>
              <div className='information d-flex '>
                <div>
                  <i className='fas fa-map-marked-alt'></i>
                </div>
                <div className='mr-5'>
                  <address>
                    <p> ستيفانو - 23 شارع عباس العقاد</p>
                    <p>حي اول - مدينة نصر </p>
                    <p>جمهورية مصر العربية</p>
                  </address>
                </div>
              </div>
            </div>
            <div className='side'>
              <h5>رقم التليفون</h5>
              <div className='information d-flex '>
                <div>
                  <i className='fas fa-phone'></i>
                </div>
                <div className='mr-5'>
                  <address dir='ltr'>
                    <p>+20 12 666 55 214</p>
                    <p>+20 12 555 77 888</p>
                    <p>+20 12 243 45 345</p>
                  </address>
                </div>
              </div>
            </div>
            <div className='side'>
              <h5>البريد الإلكترونى</h5>
              <div className='information d-flex '>
                <div>
                  <i className='fas fa-envelope-open'></i>
                </div>
                <div className='mr-5'>
                  <address dir='ltr'>
                    <p>mohamedhendy14@gmail.com</p>
                    <p>developerhendy1@gmail.com</p>
                  </address>
                </div>
              </div>
            </div>
            <div className='side side-social'>
              <h5>مواقع التواصل</h5>
              <div className='information social'>
                <ul className='list-unstyled person-social text-right p-0'>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
