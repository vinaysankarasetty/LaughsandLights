import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dropkick from 'dropkickjs';
import Location from 'react-icons/lib/ti/location'

import './register.css';
import 'dropkickjs/dist/dropkick.css';
import countryList from 'staticData/countries.json';
import statesList from 'staticData/states.json';
import $ from "jquery";


class PhotographerRegister extends React.Component {
   componentDidMount() {
    //alert(JSON.stringify(countryList));
    var countrySelect = $('#countrySelect');
    for (let i = 0; i < countryList.countries.length; i++) {
        countrySelect.append('<option value="' + countryList.countries[i]["sortname"]+'_'+countryList.countries[i]["id"] + '">' + countryList.countries[i]["name"] + '</option>');
     }
    this.countrySelectDropKick = new Dropkick(this.refs.countrySelect, { 'theme': 'default' });
    this.stateSelectDropKick = new Dropkick(this.refs.stateSelect, { 'theme': 'default' });
 }
 countrySelected(e){
   let stateSelect = $('#stateSelect');
   let _this = this;
   let stateSelectOptions = $("#stateSelect option");
   for(let i=1; i<stateSelectOptions.length;i++){
      stateSelectOptions[i].remove();
      this.stateSelectDropKick.refresh();
   }
   let selectedCountry = $('#countrySelect').val();
   let selectedCountryId = selectedCountry.split('_')[1];
   //alert(selectedCountryId);
   for (let i = 0; i < statesList.states.length; i++) {
      if(statesList.states[i]["country_id"] === selectedCountryId){
         stateSelect.append('<option value="' + statesList.states[i]["country_id"]+'_'+statesList.states[i]["id"] + '">' + statesList.states[i]["name"] + '</option>');
   
      }
   }
   this.stateSelectDropKick.refresh();

 }
   toggleGeoLocation(e){
      let element=e.currentTarget;

      if(element.className=='active'){
         element.className='';
      }else{
         element.className='active';
      }
      
   }
   render() {
      return (
         <section id="photographer_register">
         	<form>
            
            <p className="title">Individual Photographer:</p>

            

            <input type="text" name="fisrtName" id="firstName" placeholder="First Name"/>
            <input type="text" name="lastName" id="lastName" placeholder="Last Name"/>
            <input type="email" name="email" id="email" placeholder="Email Address"/>
            <select  ref="countrySelect" id="countrySelect" name="countrySelect" onChange={this.countrySelected.bind(this)}>
            <option>Select a country</option>
            </select>
            <input type="phone" name="phone" id="phone" placeholder="Mobile Number"/>
            <input type="text" name="address1" id="address1" placeholder="Address Line 1"/>
            <input type="text" name="address2" id="address2" placeholder="Address Line 2"/>
            <input type="text" name="city" id="city" placeholder="City"/>
            <select  ref="stateSelect" id="stateSelect" name="stateSelect">
            <option>Select a state</option>
            </select>
            <input type="number" name="zipcode" id="zipcode" placeholder="Zipcode"/>

            <input type="button" name="register_btn" id="register_btn" value="Register"/>

            

            </form>

         </section>
      );
   }
}
export default PhotographerRegister;