import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PhotographerRegister from '../../common/Register/Photographer/register.js';

import './registerpage.css';
class PhotographerRegisterPage extends React.Component {
   render() {
      return (

      	<div>
         <div id="content">
         <div className="container">
         
         
         <div className="item">

         <PhotographerRegister/></div>
</div>
         </div>
         
         </div>
         
      );
   }
}


export default PhotographerRegisterPage;