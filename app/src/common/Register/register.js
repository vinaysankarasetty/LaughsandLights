import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './register.css';


class Register extends React.Component {
   render() {
      return (
         <section id="register">
         	<form>
            <div>
            <span className="title">Regsiter:</span>

            </div>

            <input type="text" name="fisrtName" id="firstName" placeholder="First Name"/>
            <input type="text" name="lastName" id="lastName" placeholder="Last Name"/>
            <input type="text" name="studioName" id="studioName" placeholder="Studio Name"/>
            <input type="email" name="email" id="email" placeholder="Email Address"/>
            <input type="phone" name="phone" id="phone" placeholder="Mobile Number"/>
            <input type="text" name="address1" id="address1" placeholder="Address Line 1"/>
            <input type="text" name="address2" id="address2" placeholder="Address Line 2"/>
            <input type="text" name="city" id="city" placeholder="City"/>
            <input type="text" name="state" id="state" placeholder="State"/>
            <input type="text" name="country" id="country" placeholder="Country"/>
            <input type="number" name="zipcode" id="zipcode" placeholder="Zipcode"/>

            <input type="button" name="register_btn" id="register_btn" value="Register"/>

            <div>
            <span>Already a user? </span><Link to="/signin">Sign In</Link>

            </div>

            

            </form>

         </section>
      );
   }
}
export default Register;