import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './pgsearch.css';


class PGSearch extends React.Component {
   render() {
      return (
         <section id="pgsearch">
         	<form>
            <div>
            <span className="title">Search:</span>

            </div>

            <input type="text" name="eventtype" id="eventtype" placeholder="Event"/>

            <input type="text" name="country" id="country" placeholder="Country"/>

            <input type="text" name="state" id="state" placeholder="State"/>

            <input type="text" name="city" id="city" placeholder="City"/>

             <input type="text" name="zipcode" id="zipcode" placeholder="Zipcode"/>

            <Link to="/pgsearchresults"><input type="button" name="search_btn" id="search_btn" value="Search"/></Link>

            <div><Link to="/forgotpassword"> Cancel</Link></div>

            

            </form>

         </section>
      );
   }
}
export default PGSearch;