import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dropkick from 'dropkickjs';
import Location from 'react-icons/lib/ti/location'

import './search.css';
import 'dropkickjs/dist/dropkick.css';


class Search extends React.Component {
   componentDidMount(){
      new Dropkick( this.refs.eventTypeSelect,{'theme':'default'} );
      new Dropkick( this.refs.countrySelect,{'theme':'default'} );
      new Dropkick( this.refs.stateSelect,{'theme':'default'} );
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
         <section id="search">
         	<form>
            
            <p className="title">Search:</p>

            

            <select ref="eventTypeSelect" id="eventTypeSelect">
            <option>Select Event Type</option>
            <option value="1">Wedding</option>
            <option value="2">BirthDay</option>
            <option value="3">Anniversary</option>
            <option value="3">Get Together</option>
            <option value="3">Public Meeting</option>

            </select>
            <p><br/><span onClick={this.toggleGeoLocation} id="geoLocationIcon" ><Location width="30px" height="30px"/></span> User My Current Location.</p>

            <select ref="countrySelect" id="countrySelect" name="countrySelect">
            <option>Select Country</option>
            <option value="1">United States</option>
            <option value="2">India</option>
            <option value="3">Canada</option>
            <option value="3">Australia</option>
            <option value="3">Russia</option>

            </select>

            <select ref="stateSelect" id="stateSelect" name="stateSelect">
            <option>Select State</option>
            <option value="1">NewYork</option>
            <option value="2">Texas</option>
            <option value="3">California</option>
            <option value="3">Illinois</option>
            <option value="3">Washington</option>

            </select>

            <input type="text" name="city" id="city" placeholder="City"/>

             <input type="text" name="zipcode" id="zipcode" placeholder="Zipcode"/>

            <Link to="/pgsearchresults"><input type="button" name="search_btn" id="search_btn" value="Search"/></Link>

            <Link to={history.back()}> Cancel</Link>

            

            </form>

         </section>
      );
   }
}
export default Search;