import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dropkick from 'dropkickjs';
import Location from 'react-icons/lib/ti/location'

import './register.css';
import 'dropkickjs/dist/dropkick.css';


class PGSearch extends React.Component {
   componentDidMount(){
      //new Dropkick( this.refs.eventTypeSelect,{'theme':'default'} );
      new Dropkick( this.refs.countrySelect,{'theme':'default'} );
      //new Dropkick( this.refs.stateSelect,{'theme':'default'} );
      
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
         <section id="pgregister">
         	<form>
            
            <p className="title">Individual Photographer:</p>

            

            <input type="text" name="fisrtName" id="firstName" placeholder="First Name"/>
            <input type="text" name="lastName" id="lastName" placeholder="Last Name"/>
            <input type="email" name="email" id="email" placeholder="Email Address"/>
            <select  ref="countrySelect" id="countrySelect" name="countrySelect">
            <option>Select a country</option>
            <option value="US">USA</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            </select>
            <input type="phone" name="phone" id="phone" placeholder="Mobile Number"/>
            <input type="text" name="address1" id="address1" placeholder="Address Line 1"/>
            <input type="text" name="address2" id="address2" placeholder="Address Line 2"/>
            <input type="text" name="city" id="city" placeholder="City"/>
            <input type="text" name="state" id="state" placeholder="State"/>
            
            <input type="number" name="zipcode" id="zipcode" placeholder="Zipcode"/>

            <input type="button" name="register_btn" id="register_btn" value="Register"/>

            

            </form>

         </section>
      );
   }
}
export default PGSearch;