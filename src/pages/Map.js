import React, {Component} from 'react'
import {Map,Marker,GoogleApiWrapper} from 'google-maps-react';
import '/src/components/styles/custom.css'

  
  const mapStyles = {
    width: '90%',
    height: '70%',
    

  };
  


export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapCenter: {
          lat: 51.598700,
          lng: -0.102110,
      }
    };
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
        <div className="maps" id="googleMap">
        <Map google={this.props.google}
            initialCenter={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
            }}
            center = {{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
            }}
            style={mapStyles}
            zoom={16}
        >
          <Marker
            position={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
            }} 
           
          />
   
        </Map>
        
        </div>

    
      )
    } 
  }
  export default GoogleApiWrapper({
    apiKey: ('AIzaSyDXgZALecA7PDmrcrhdk7c2Kgh6LcVaLfs')
  })(MapContainer)