import React, { Component } from "react";
import Header from '../../components/header/header';
import Features from '../../components/features/features';
import View from '../../components/view/view';
import HowWork from '../../components/how-work/how-work';
import Metal from '../../components/metal-images/metal';
import Team from '../../components/team/team';
import Clients from '../../components/clients/clients';
import FAQ from '../../components/faq/faq';
import Contact from '../../components/contact/contact';

class HomePage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <Features />
        <View />
        <HowWork />
        <Metal />
        <Team />
        <Clients />
        <FAQ />
        <Contact /> 
      </React.Fragment>
    );
  }
}

export default HomePage;
