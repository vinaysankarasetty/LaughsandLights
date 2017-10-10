import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PGSearch from '../../common/PGSearch/pgsearch.js';

import './pgsearchpage.css';
class PGSearchPage extends React.Component {
   render() {
      return (

      	<div>
         <div id="content">
         <div className="container">
         
         
         <div className="item">

         <PGSearch/></div>
</div>
         </div>
         
         </div>
         
      );
   }
}


export default PGSearchPage;