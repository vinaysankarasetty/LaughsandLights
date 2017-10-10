import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import PGSearchResults from '../../common/PGSearchResults/pgsearchresults.js';
import './pgsearchresultspage.css';
class PGSearchResultsPage extends React.Component {
   render() {
      return (

      	<div>
         <div id="content">
         <div className="container">
         
        
         <div className="item">

         <PGSearchResults/></div>
</div>
         </div>
         
         </div>
         
      );
   }
}


export default PGSearchResultsPage;