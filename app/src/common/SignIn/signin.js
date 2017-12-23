import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './signin.css';


class SignIn extends React.Component {
   render() {
      return (
         <section id="signin">
         	<form>
            <div>
            <span className="title">Sign In:</span>

            </div>

            <input type="email" name="username" id="username" placeholder="Username"/>

            <input type="password" name="password" id="password" placeholder="Password"/>

            <input type="button" name="signin_btn" id="signin_btn" value="Sign In"/>

            <div><Link to="/forgotpassword"> Forgot Password?</Link></div>

            <div>
            <span>Not a user? </span><Link to="/register">Register</Link>

            </div>

            <div>
            <Link to="/register/photographer">Register as Individual Photographer</Link>

            <br/><br/>

            <Link to="/register">Register a Studio</Link>


            </div>

            </form>

         </section>
      );
   }
}
export default SignIn;