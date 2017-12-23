import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SearchResults from '../../common/SearchResults/searchresults.js';
import './searchresultspage.css';
class SearchResultsPage extends React.Component {
   render() {
      return (

      	<div>
         <div id="content">
         <div className="container">
         
        
         <div className="item">

         <SearchResults/></div>
</div>
         </div>
         
         </div>
         
      );
   }
}


export default SearchResultsPage;