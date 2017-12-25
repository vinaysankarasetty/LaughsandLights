import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './reset.css';
import './App.css';
import axios from 'axios';
import {connect} from 'react-redux'

import Header from './app/src/common/Header/header.js';
import HomePage from './app/src/layouts/HomePage/homepage.js';
import SignInPage from './app/src/layouts/SignInPage/signinpage.js';
import UserRegisterPage from './app/src/layouts/RegisterPage/registerpage.js';
import ForgotPasswordPage from './app/src/layouts/ForgotPasswordPage/forgotpasswordpage.js';
import SearchPage from './app/src/layouts/SearchPage/searchpage.js';
import PhotographerRegisterPage from './app/src/layouts/PhotographerRegisterPage/registerpage.js';
import StudioRegisterPage from './app/src/layouts/StudioRegisterPage/registerpage.js';
import SearchResultsPage from './app/src/layouts/SearchResultsPage/searchresultspage.js';
import {fetchUserLocation} from './app/src/Actions/actions.js'


var userLocation = null;

@connect((store) => {
  return {
    userLocation: store.userLocation

  };
})
class App extends React.Component {
  
  componentWillMount(){
    this.props.dispatch(fetchUserLocation());
  }
   render() {
    console.log(this.props);
    return (
      	<BrowserRouter>
      	<div>
      	
      	<Header/>
         <main>
         <Route exact path="/" component={HomePage}/>

         <Route path="/signin" component={SignInPage} />
         <Route exact path="/register" component={UserRegisterPage} />
         <Route path="/forgotpassword" component={ForgotPasswordPage} />
         <Route path="/search" component={SearchPage} />
         <Route path="/register/photographer" component={PhotographerRegisterPage} />
         <Route path="/register/studio" component={StudioRegisterPage} />
          <Route path="/searchresults" component={SearchResultsPage} />
         </main>
         
         </div>
         </BrowserRouter>
      );
   }
}


export default App;