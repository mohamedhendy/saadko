import React, { Component } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-white'>
          <div className='container-fluid'>
            <Link className='navbar-brand' to='/'>
              <img src={require("../../assets/images/logo.png")} alt='' />
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <i className='fas fa-align-left'></i>
            </button>

            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                  <Link className='nav-link' to='about'>
                    من نحن
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='services'>
                    خدماتنا
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='price'>
                    طلب عرض سعر
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='contact'>
                    اتصل بنا
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
