import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dropkick from 'dropkickjs';
import Location from 'react-icons/lib/ti/location'

import './register.css';
import 'dropkickjs/dist/dropkick.css';
import countryList from 'staticData/countries.json';
import statesList from 'staticData/states.json';
import $ from "jquery";
import {connect} from 'react-redux'

@connect((store) => {
  return {
    userLocation: store.userLocation

  };
})
class PhotographerRegister extends React.Component {
   constructor(props) {
    super(props);
    this.state = {city: props.userLocation.cityName,
      zipcode: props.userLocation.postalCode};
  }
  componentWillReceiveProps(nextProps){
    this.setState({city: nextProps.userLocation.cityName, zipcode: nextProps.userLocation.postalCode});
    this.selectNewCountry(nextProps);

  }
  
   
   componentDidMount() {
    
   this.loadCountries(this.props);

 }
 selectNewCountry(props){
this.countrySelectDropKick.select(props.userLocation.countryCode);
this.countrySelected(props);

 }
 loadCountries(props){
   const {userLocation} = props;
    var countrySelect = $('#countrySelect');
    for (let i = 0; i < countryList.countries.length; i++) {
      let option = '<option ';
      if(userLocation.countryCode==countryList.countries[i]["sortname"]){
        option+='selected=true '
      }
      option+='value="' + countryList.countries[i]["sortname"]+'" data-country-id="'+countryList.countries[i]["id"] +'">' + countryList.countries[i]["name"];
      option += '</optiion>';
        countrySelect.append(option);
     }
    this.countrySelectDropKick = new Dropkick(this.refs.countrySelect, { 'theme': 'default' });
    this.stateSelectDropKick = new Dropkick(this.refs.stateSelect, { 'theme': 'default' });
    if(userLocation.countryCode){
        this.countrySelected(props);
      }
 }
 countrySelected(props){
  const {userLocation} = props;
   let stateSelect = $('#stateSelect');
   let _this = this;
   let stateSelectOptions = $("#stateSelect option");
   for(let i=1; i<stateSelectOptions.length;i++){
      stateSelectOptions[i].remove();
      this.stateSelectDropKick.refresh();
   }
   let selectedCountry = $('#countrySelect').val();
   let selectedCountryId = $('#countrySelect :selected').attr('data-country-id');
   //alert(selectedCountryId);
   for (let j = 0; j < statesList.states.length; j++) {
      if(statesList.states[j]["country_id"] == selectedCountryId){
         stateSelect.append('<option value="'+statesList.states[j]["name"]+'" data-state-id="' + statesList.states[j]["country_id"]+'_'+statesList.states[j]["id"] + '">' + statesList.states[j]["name"] + '</option>');
   
      }
   }
  this.stateSelectDropKick.refresh();
   this.stateSelectDropKick.select(userLocation.stateName);
   

 }
 handleCityChange(){

 }
 handleZipChange(){

 }
   render() {
      const {userLocation} = this.props;
      return (
         <section id="photographer_register">
         	<form>
            
            <p className="title">Individual Photographer:</p>

            

            <input type="text" name="fisrtName" id="firstName" placeholder="First Name*" required="required"/>
            <input type="text" name="lastName" id="lastName" placeholder="Last Name*" required="required"/>
            <input type="email" name="email" id="email" placeholder="Email Address*" required="required"/>
            <input type="password" name="password" id="password" placeholder="Password"/>
            <select  ref="countrySelect" id="countrySelect" name="countrySelect" onChange={this.countrySelected.bind(this,this.props)}>
            <option>Select a country</option>
            </select>
            <input type="phone" name="phone" id="phone" placeholder="Mobile Number*" required="required"/>
            <input type="text" name="address1" id="address1" placeholder="Address Line 1*" required="required"/>
            <input type="text" name="address2" id="address2" placeholder="Address Line 2"/>
            <input type="text" name="city" id="city" placeholder="City*" required="required" onChange={this.handleCityChange.bind(this)} value={this.state.city}/>
            <select  ref="stateSelect" id="stateSelect" name="stateSelect">
            <option>Select a state</option>
            </select>
            
            <input type="text" name="zipcode" id="zipcode" placeholder="Zipcode*" required="required" onChange={this.handleZipChange.bind(this)} value={this.state.zipcode}/>

            <input type="button" name="register_btn" id="register_btn" value="Next"/>

            <div>
            <span>Already a Photographer? </span><Link to="/signin">Sign In</Link>
            </div>

            

            </form>

         </section>
      );
   }
}
export default PhotographerRegister;