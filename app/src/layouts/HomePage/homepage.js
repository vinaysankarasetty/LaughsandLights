import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import UserLocationInput from '../../common/UserLocationInput/userlocationinput.js';
import WelcomeTiles from '../../common/WelcomeTiles/welcometiles.js';

import './homepage.css';
class ForgotPasswordPage extends React.Component {
   render() {
      return (

      	<div>
         <div id="content">
         <div className="container user_location_container">
         <div>
         <UserLocationInput formatedAddress={this.props.formatedAddress}/>

         </div>
         
         <div className="item"><WelcomeTiles/></div>
        
</div>
         </div>
         
         </div>
         
      );
   }
}


export default ForgotPasswordPage;