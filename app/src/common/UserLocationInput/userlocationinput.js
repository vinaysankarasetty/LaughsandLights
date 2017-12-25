import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './userlocationinput.css';
import Location from 'react-icons/lib/ti/location';
import FaSearch from 'react-icons/lib/fa/search';
import $ from "jquery";
import {connect} from 'react-redux'

@connect((store) => {
  return {
    userLocation: store.userLocation

  };
})
class UserLocationInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {locationAutoPopulated: props.userLocation.userLocationFetched};
  }
  componentWillReceiveProps(nextProps){
    this.setState({locationAutoPopulated: nextProps.userLocation.userLocationFetched});

  }
   
toggleLocationPreference(){
  if($('.icon.location').hasClass('autoLocation')){
    this.auto_user_address = this.refs.user_location_input.value;
    this.refs.user_location_input.value = "";
    $('.icon.location').removeClass('autoLocation');
  }else{
    this.refs.user_location_input.value = this.auto_user_address ? this.auto_user_address : "";
    if(this.auto_user_address){
      $('.icon.location').addClass('autoLocation');
    }
  }
}
handleLocationChange(){

}

   render() {
    const {userLocation} = this.props;
      return (
         <section id="userlocationinput">
         	<form>
          <input type="text" name="search_text_field" id="search_text_field" placeholder="Enter name of the Photographer or Studio or event or type of Photography"/>
            <input type="text" name="user_location" onChange={this.handleLocationChange.bind(this)} id="user_location" ref="user_location_input" placeholder="Enter your location" value={userLocation.formattedAddress}/>
              <Location className={this.state.locationAutoPopulated?"icon location autoLocation":"icon location"} width="40px" height="40px" onClick={this.toggleLocationPreference.bind(this)}/>

            <Link to="/search"><FaSearch width="20px" height="20px" id="search_btn"/></Link>

            

            

            </form>

         </section>
      );
   }
}
export default UserLocationInput;