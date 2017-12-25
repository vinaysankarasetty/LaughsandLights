import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './header.css';
import UserIcon from 'react-icons/lib/md/account-circle'
import PhotographerIcon from 'react-icons/lib/ti/user-outline'
import StudioIcon from 'react-icons/lib/ti/group-outline'

class Header extends React.Component {

   showHideRegisterOptions(value){
   if(value){
this.setState({"registerLinkState" : "absolute register_link active"});
}else{
   this.setState({"registerLinkState" : "absolute register_link"});
}

   }
   constructor(props){

   super(props);
   this.state = {
   registerLinkState : "absolute register_link"
}

   }
   render() {
      return (
         <header>
            <h1><Link to="/">Laughs &amp; Lights</Link></h1>
            <menu>
               <ul>
                  <li>
                     <Link to="/signin">Sign In</Link>
                  </li>
                  <li className="relative" onMouseOver={this.showHideRegisterOptions.bind(this,1)} onMouseOut= {this.showHideRegisterOptions.bind(this,0)}>
                     <a href="#">Register</a>
                     
                     <div className={this.state.registerLinkState} ref="register_link">
                        <div>
                           <Link to="/register/photographer"><PhotographerIcon width="25px" height="25px"/>Individual Photographer</Link>
                        </div>
                        <div>
                           <Link to="/register/studio"><StudioIcon width="25px" height="25px"/>Studio</Link>
                        </div>
                     </div>

                  </li>
                  <li>
                     <a href="#"> <UserIcon width="25px" height="25px"/>Welcome Guest</a>
                  </li>
               </ul>
            </menu>
         </header>
      );
   }
}
export default Header;