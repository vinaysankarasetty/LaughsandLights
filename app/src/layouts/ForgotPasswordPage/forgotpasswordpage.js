import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ForgotPassword from '../../common/ForgotPassword/forgotpassword.js';
import WelcomeTiles from '../../common/WelcomeTiles/welcometiles.js';
import './forgotpasswordpage.css';
class ForgotPasswordPage extends React.Component {
   render() {
      return (

      	<div>
         <div id="content">
         <div className="container">
         
         <div className="item"><WelcomeTiles/></div>
         <div className="item">

         <ForgotPassword/></div>
</div>
         </div>
         
         </div>
         
      );
   }
}


export default ForgotPasswordPage;