import React from 'react';
import './App.css';
import '../src/assets/js/custom.js';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import Price from './pages/price/price';
import HomePage from './pages/home-page/home-page';
import AboutPage from './pages/about-page/about-page';
import ServicesPage from './pages/services-page/services-page';
import { Route, Redirect } from 'react-router-dom';
function App() {
  return (
    <div className="App" dir="rtl">
      <Navbar />

      <Route path="/" exact component={HomePage} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/services" exact component={ServicesPage} />
      <Route path="/price" exact component={Price} />
      <Route path="/contact" exact component={Contact} />
      <Redirect to="/" />
      <Redirect from="home" to="/" />
      <Footer />
    </div>
  );
}

export default App;
