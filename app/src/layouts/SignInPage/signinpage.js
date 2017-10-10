import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SignIn from '../../common/SignIn/signin.js';
import WelcomeTiles from '../../common/WelcomeTiles/welcometiles.js';
import './signinpage.css';
class App extends React.Component {
   render() {
      return (

      	<div>
         <div id="content">
         <div className="container">
         
         <div className="item"><WelcomeTiles></WelcomeTiles></div>
         <div className="item">

         <SignIn></SignIn></div>
</div>
         </div>
         
         </div>
         
      );
   }
}


export default App;