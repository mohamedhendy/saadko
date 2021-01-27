import React, { Component } from "react";
import "./how-work.css";
import WorksSection from "./work-section";
import Intro from "./../intro/intro";
import ControlsBtn from "./controls";
class HowWork extends Component {
  state = {
    introTitle: "كيـف نعمل",
    introParagraph: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    displayManagement: " d-block",
    displayTech: " d-none",
    displayCharts: " d-none ",
    image: "business.png",
    imageTech: "tech.png",
    imageChart: "charts.png",
    BtnMag: " btn-active ",
    BtnTitle: " الجانب الإداري",
    BtnTitle2: " الجانب المهنى",
    BtnTitle3: " الجانب التقنى",
    BtnTech: "  ",
    BtnChar: "  ",
    WorkTitle: "نعتمد على افضل الكوادر الإداريه المتخصصه فى مجال الزجاج والألومنيوم ",
    WorkTitle2: "نعتمد على افضل الكوادر المهنية المتخصصه فى مجال الزجاج والألومنيوم ",
    WorkTitle3: "نعتمد على افضل الكوادر التقنية المتخصصه فى مجال الزجاج والألومنيوم ",
    WorkParagraph:
      " هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
    FirstTitle: "الاسلوب الحديث فى اختيار الموارد",
    FirstTitle1: "الاسلوب العلمى   فى اتخاذ القرار",
    FirstTitle2: "الاسلوب الحديث فى استخدام التقنيات",
    SecondTitle: "استخدام افضل الأجهزه الحذيثه فى تحليل البيانات",
    LastTitle: "وضع خطة تنافسية تناسب جميع الفئات",
    FirstParagraph:
      "   هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.،",
    SecondParagraph:
      "  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
    LastParagraph:
      "  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
  };

  onClickManagement = () => {
    this.setState({
      displayTech: " d-none",
      displayCharts: " d-none ",
      displayManagement: " d-block",
      BtnMag: " btn-active ",
      BtnTech: "  ",
      BtnChar: "  "
    });
  };
  onClickTech = () => {
    this.setState({
      displayTech: " d-block ",
      displayCharts: " d-none",
      displayManagement: " d-none",
      BtnMag: " ",
      BtnTech: "  btn-active ",
      BtnChar: "  "
    });
  };
  onClickCharts = () => {
    this.setState({
      displayTech: " d-none",
      displayCharts: " d-block ",
      displayManagement: " d-none",
      BtnMag: " ",
      BtnTech: "   ",
      BtnChar: " btn-active "
    });
  };
  render() {
    const {
      WorkTitle,
      WorkTitle2,
      WorkTitle3,
      WorkParagraph,
      FirstTitle,
      FirstTitle1,
      FirstTitle2,
      SecondTitle,
      LastTitle,
      FirstParagraph,
      SecondParagraph,
      LastParagraph,
      image,
      imageTech,
      imageChart,
      introTitle,
      introParagraph,
      BtnMag,
      BtnTech,
      BtnChar,
      BtnTitle,
      BtnTitle2,
      BtnTitle3
    } = this.state;
    return (
      <div className="bg-way">
        <div className=' work-section'>
          <Intro introTitle={introTitle} introParagraph={introParagraph} />
          <div className='control-buttons'>
            <ul className='list-unstyled text-center'>
              <li className='d-inline-block work-btn'>
                <ControlsBtn text={BtnTitle} classBtn={BtnMag} clicked={this.onClickManagement} />
                <ControlsBtn text={BtnTitle2} classBtn={BtnTech} clicked={this.onClickTech} />
                <ControlsBtn text={BtnTitle3} classBtn={BtnChar} clicked={this.onClickCharts} />
              </li>
            </ul>
          </div>
          <div className={"work-way" + this.state.displayManagement}>
            <WorksSection
              title={WorkTitle}
              mainParagraph={WorkParagraph}
              firstTitle={FirstTitle}
              secondTitle={SecondTitle}
              lastTitle={LastTitle}
              firstParagraph={FirstParagraph}
              secondParagraph={SecondParagraph}
              lastParagraph={LastParagraph}
              image={image}
            />
          </div>
          <div className={"work-way" + this.state.displayTech}>
            <WorksSection
              title={WorkTitle2}
              mainParagraph={WorkParagraph}
              firstTitle={FirstTitle1}
              secondTitle={SecondTitle}
              lastTitle={LastTitle}
              firstParagraph={FirstParagraph}
              secondParagraph={SecondParagraph}
              lastParagraph={LastParagraph}
              image={imageTech}
            />
          </div>
          <div className={"work-way" + this.state.displayCharts}>
            <WorksSection
              title={WorkTitle3}
              mainParagraph={WorkParagraph}
              firstTitle={FirstTitle2}
              secondTitle={SecondTitle}
              lastTitle={LastTitle}
              firstParagraph={FirstParagraph}
              secondParagraph={SecondParagraph}
              lastParagraph={LastParagraph}
              image={imageChart}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HowWork;
