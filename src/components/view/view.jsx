import React, { Component } from "react";
import "./view.css";
class View extends Component {
  state = {};
  render() {
    return (
      <div className='position-relative view'>
        <div className='d-flex '>
          <div className='view-content view-content-text  text-right'>
            <div>
              <h3 className=''>
                أفضل الخامات المصنعه والمنتجه عالميا تتميز بصلابتها وقوتها ومتناتها
              </h3>
              <p>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى
                زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك
                مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء
                لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير
                من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع
                نصوصا مؤقتة
              </p>
            </div>
          </div>
          <div className='view-content'>
            <img className='w-100' src={require("../../assets/images/factory.png")} alt='' />
          </div>
        </div>
        <div className='d-flex '>
          <div className='view-content sm-order-img'>
            <img className='w-100' src={require("../../assets/images/mental.png")} alt='' />
          </div>
          <div className='view-content view-content-text  text-right sm-order-text'>
            <div>
              <h3 className=''>
                الإهتمام بالجانب البشري وامتلاك أمهر العاملين والمتخصصين بالمجال 
              </h3>
              <p>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى
                زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك
                مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء
                لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير
                من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع
                نصوصا مؤقتة
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default View;
