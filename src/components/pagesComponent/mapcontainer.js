import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class MapContainer extends Component {
  render() {
    return (
      <Map className="zoom" google={this.props.google} zoom={14}>


                <Marker
    name={'NetGain SEO'}

    position={{lat: 44.394750, lng:  -79.694909 }} />
  <Marker />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDCoLItJQR_2yeznxy-X0n7io-eYLHKILg")
})(MapContainer)
