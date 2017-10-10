import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './forgotpassword.css';


class ForgotPassword extends React.Component {
   render() {
      return (
         <section id="forgotpassword">
         	<form>
            <div>
            <span className="title">Forgot Password:</span>

            </div>

            <input type="email" name="username" id="username" placeholder="Email Address"/>

            
            <input type="button" name="forgotpassword_btn" id="forgotpassword_btn" value="Send Email"/>

            <div><Link to="/register"> Register</Link></div>

            <div>
            <Link to="/signin">Sign In</Link>

            </div>

            </form>

         </section>
      );
   }
}
export default ForgotPassword;