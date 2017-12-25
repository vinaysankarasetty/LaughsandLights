import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './app/src/store.js'

import App from './App.js';

 
ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>
	, document.getElementById('app'));
