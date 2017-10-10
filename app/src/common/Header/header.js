import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './header.css';


class Header extends React.Component {
   render() {
      return (
         <header>
         	<h1>Laughs &amp; Lights</h1>

         	<menu>
         	<ul>
         	<li>

         	<Link to="/pgsearch">Hire</Link>

         	</li>
         	<li>

         	<a href="#">Rent</a>

         	

         	</li>
         	
         	<li>

         	<a href="#">Welcome Guest</a>
         	

         	

         	</li>

         	</ul>

         	</menu>

         </header>
      );
   }
}
export default Header;