import React, {Component} from 'react'
import {Map,Marker,GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';
  import custom from '../pages/custom.scss'


  
  const mapStyles = {
    width: '50%',
    height: '47%',

  };
  

export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapCenter: {
          lat: 51.50493851649202,
          lng: -0.02331140276335189
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
            zoom={14}
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