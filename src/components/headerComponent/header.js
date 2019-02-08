import React, { Component } from 'react';
import logo from '../../images/logo.svg';

import Popup from '../../components/headerComponent/popup';

class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo} alt={logo}/>
          <div className="call">
            <p>174 Bayfield St Barrie, ON Canada L4M 3B5</p>
            <h3><a href="tel:170579439848">Call us! 705-797-2455</a></h3>
          </div>
          <div class="header-right">
            <a class="active" href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#coffee">Coffee</a>
            <a href="#services">Services</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
            <a ><Popup /></a>
            </div>
      </header>
    );
  }


}

export default Header;
