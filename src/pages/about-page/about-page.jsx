import React, { Component } from "react";
import About from "./../../components/about/about";
import Contact from "./../../components/contact/contact";

class AboutPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <About />
        <Contact />
      </React.Fragment>
    );
  }
}

export default AboutPage;
