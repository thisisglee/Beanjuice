import React, { Component } from 'react';
import home_main_image from '../../images/home-main-image.jpg';
import MapContainer from '../../components/pagesComponent/mapcontainer';

class Section2 extends Component {
  render() {
    return (
      <div className="section2">
          <h3>We are located at: 174 Bayfield St Barrie, ON Canada L4M 3B5</h3>
          <div className="google_map"><MapContainer /></div>
          </div>
  );
  }
}
export default Section2;
