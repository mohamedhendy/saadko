import React, { Component } from "react";
import Intro from "../../components/intro/intro";

class Price extends Component {
  state = {
    introTitle: "قم بطلب عرض سعر",
    introParagraph: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة"
  };
  render() {
    const { introTitle, introParagraph } = this.state;
    return (
      <div className='price'>
        <div className='container py-4 pt-5'>
          <Intro introTitle={introTitle} introParagraph={introParagraph} />
        </div>

        <div className='container'>
          <p className='py-3 text-center intro-paragraph'>
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص
            العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
            الحروف التى يولدها التطبيق.
          </p>
          <div className='contact'>
            <form>
              <div className='form-group'>
                <input type='text' required className='form-control' placeholder='الإسم الكريم*' />
              </div>
              <div className='d-flex justify-content-between name-number'>
                <div className='form-group'>
                  <input
                    type='email'
                    required
                    className='form-control'
                    placeholder='البريد الإلكترونى*'
                  />
                </div>
                <div className='form-group'>
                  <input type='number' className='form-control' placeholder='رقم التليفون' />
                </div>
              </div>
              <div className='form-group'>
                <input type='text' required className='form-control' placeholder='اسم المنتج*' />
              </div>
              <div className='form-group'>
                <input type='text' required className='form-control' placeholder='الكمية*' />
              </div>
              <div className='form-group'>
                <textarea
                  className='form-control'
                  placeholder='من فضلك قم بطرح اى اسئلة لديك عن المنتج '
                  cols='30'
                  rows='10'></textarea>
              </div>
              <button className='btn-msg' type='submit'>
                أرسل طلب العرض <i className='fab fa-telegram-plane'></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Price;
