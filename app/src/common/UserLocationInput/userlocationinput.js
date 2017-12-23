import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './userlocationinput.css';
import Location from 'react-icons/lib/ti/location'
import FaSearch from 'react-icons/lib/fa/search'


class UserLocationInput extends React.Component {
   
   componentDidMount(){
      let _this = this;
      let googleGeoAPIKey = "AIzaSyC4Knz3lGy2kN3dpW98sbnw8eo9-9CSnXw";
   let googleGeoURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY`;
   
      if ("geolocation" in navigator) {
  /* geolocation is available */
  navigator.geolocation.getCurrentPosition(function(position) {
   let __this = _this;
   let lat = position.coords.latitude;
   let lng = position.coords.longitude;

   //alert("Latitude : "+position.coords.latitude+"; Longitude : "+position.coords.longitude);
  //do_something(position.coords.latitude, position.coords.longitude);
  axios.get("https:\/\/maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key="+googleGeoAPIKey)
      .then(res => {
        //alert(res.data.results[0].formatted_address);
        __this.refs.user_location_input.value = res.data.results[0].formatted_address;
      });
});
} else {
  /* geolocation IS NOT available */
}
   }
   render() {
      return (
         <section id="userlocationinput">
         	<form>

            <input type="text" name="user_location" id="user_location" ref="user_location_input" placeholder="Enter your location"/>

            <Location width="40px" height="40px"/>

            <FaSearch width="20px" height="20px" id="search_btn"/>

            

            

            </form>

         </section>
      );
   }
}
export default UserLocationInput;