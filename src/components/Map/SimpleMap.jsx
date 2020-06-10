import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
// import MapLocation from './MapLocation';

import './index.scss';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
/* GoogleMap.defaultProps = {
  distanceToMouse: function distanceToMouse(pt, mousePos /* , markerProps ) {
    return Math.sqrt(
      (pt.x - mousePos.x) * (pt.x - mousePos.x) + (pt.y - mousePos.y) * (pt.y - mousePos.y)
    );
  }
};
*/
class SimpleMap extends Component {
  constructor() {
    super();
    this.state = {
      marker: {
        lat: null,
        lng: null
      }
    };
  }

  handleMapClick = ({ x, y, lat, lng, event }) => {
    console.log(event);
    console.log(lat);
    console.log(lng);
    this.setState({ marker: { lat, lng } });
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map">
        <GoogleMap
          apiKey={process.env.REACT_APP_key}
          defaultCenter={{
            lat: 38.75,
            lng: -9
          }}
          defaultZoom={11}
          onClick={this.handleMapClick}
          distanceToMouse={() => {}}
        >
          {this.state.marker.lat !== null && (
            <small lat={this.state.marker.lat} lng={this.state.marker.lng}>
              My Marker
            </small>
          )}
        </GoogleMap>
        {/* <GoogleMapReact
          style={{ height: '100vh', width: '100%' }}
          bootstrapURLKeys={{ key: process.env.REACT_APP_key }}
          defaultCenter={{
            lat: 38.75,
            lng: -9
          }}
          defaultZoom={11}
        >
          {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact> */}
      </div>
    );
  }
}
export default SimpleMap;

// static defaultProps = {
//   center: {
//     lat: 38.75,
//     lng: -9
//   },
//   zoom: 11
// };
