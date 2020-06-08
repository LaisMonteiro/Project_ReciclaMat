import React, { Component } from 'react';
import './App.scss';
import LandingPage from './views/LandingPage';
import SimpleMap from './components/SimpleMap';

//importing google maps API

// import GoogleMapReact from 'google-map-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
        <SimpleMap />
      </div>
    );
  }
}


export default App;
