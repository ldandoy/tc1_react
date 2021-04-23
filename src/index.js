import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HelloScreen from './screens/HelloScreen'
import LoginScreen from './screens/LoginScreen'
import ProductsScreen from './screens/ProductsScreen'
import ProductScreen from './screens/ProductScreen'
import ProductEditScreen from './screens/ProductEditScreen';
import './styles/index.css';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path='/' exact component={LoginScreen} />
      <Route path='/hello' component={HelloScreen} />
      <Route path='/products' exact component={ProductsScreen} />
      <Route path='/products/:productId' exact component={ProductScreen} />
      <Route path='/products/:productId/edit' component={ProductEditScreen} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);