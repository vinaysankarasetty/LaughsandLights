import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './reset.css';
import './App.css';
import Header from './app/src/common/Header/header.js';
import SignInPage from './app/src/layouts/SignInPage/signinpage.js';
import RegisterPage from './app/src/layouts/RegisterPage/registerpage.js';
import ForgotPasswordPage from './app/src/layouts/ForgotPasswordPage/forgotpasswordpage.js';
import PGSearchPage from './app/src/layouts/PGSearchPage/pgsearchpage.js';
import PGSearchResultsPage from './app/src/layouts/PGSearchResultsPage/pgsearchresultspage.js';


var userLocation = null;

class App extends React.Component {
	
	componentDidMount(){
		if ("geolocation" in navigator) {
  /* geolocation is available */
  navigator.geolocation.getCurrentPosition(function(position) {
  userLocation = position;
});
} else {
  /* geolocation IS NOT available */
}



	}
   render() {
      return (
      	<BrowserRouter>
      	<div>
      	
      	<Header/>
         <main>
         <Route path="/signin" component={SignInPage} />
         <Route path="/register" component={RegisterPage} />
         <Route path="/forgotpassword" component={ForgotPasswordPage} />
         <Route path="/pgsearch" component={PGSearchPage} />
          <Route path="/pgsearchresults" component={PGSearchResultsPage} />
         </main>
         
         </div>
         </BrowserRouter>
      );
   }
}


export default App;