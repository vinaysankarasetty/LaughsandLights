import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from '../../common/Search/search.js';

import './searchpage.css';
class SearchPage extends React.Component {
   render() {
      return (

      	<div>
         <div id="content">
         <div className="container">
         
         
         <div className="item">

         <Search/></div>
</div>
         </div>
         
         </div>
         
      );
   }
}


export default SearchPage;