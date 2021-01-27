import React, { Component } from "react";
import "./team.css";
import Person from "./person";
import Intro from "../intro/intro";
class Team extends Component {
  state = {
    firstPersonTitle: "الاستاذ ناصر على",
    secondPersonTitle: "الدكتور ربيع الهادى ",
    ThirdPersonTitle: "المهندس سيد معوض",
    firstPersonBio: "مدير المبيعات",
    secondPersonBio: "رئيس مجلس الإداره",
    ThirdPersonBio: "المسؤول التقنى",
    personOne: "ahmed.png",
    personTwo: "kamal.png",
    personThree: "sayed.png",
    introTitle: "فريق العمل ",
    introParagraph: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة"
  };
  render() {
    const {
      personOne,
      personTwo,
      personThree,
      introTitle,
      introParagraph,
      firstPersonTitle,
      secondPersonTitle,
      ThirdPersonTitle,
      firstPersonBio,
      secondPersonBio,
      ThirdPersonBio
    } = this.state;
    return (
      <div className='container team'>
        <Intro introTitle={introTitle} introParagraph={introParagraph} />
        <div className='row team-group'>
          <div className='col-md-4'>
            <Person image={personOne} PersonTitle={firstPersonTitle} PersonBio={firstPersonBio} />
          </div>
          <div className='col-md-4'>
            <Person image={personTwo} PersonTitle={secondPersonTitle} PersonBio={secondPersonBio} />
          </div>
          <div className='col-md-4'>
            <Person image={personThree} PersonTitle={ThirdPersonTitle} PersonBio={ThirdPersonBio} />
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
