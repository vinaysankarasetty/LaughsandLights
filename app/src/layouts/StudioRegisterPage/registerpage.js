import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StudioRegister from '../../common/Register/Studio/register.js';

import './registerpage.css';
class PGRegisterPage extends React.Component {
   render() {
      return (

      	<div>
         <div id="content">
         <div className="container">
         
         
         <div className="item">

         <StudioRegister/></div>
</div>
         </div>
         
         </div>
         
      );
   }
}


export default PGRegisterPage;