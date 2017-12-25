import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Register from '../../common/Register/User/register.js';
import WelcomeTiles from '../../common/WelcomeTiles/welcometiles.js';
import './registerpage.css';
class RegisterPage extends React.Component {
   
   render() {
      return (

      	<div>
         <div id="content">
         <div className="container">
         
         <div className="item"><WelcomeTiles/></div>
         <div className="item">

         <Register/></div>
</div>
         </div>
         
         </div>
         
      );
   }
}


export default RegisterPage;