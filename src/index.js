import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HelloScreen from './screens/HelloScreen';
import LoginScreen from './screens/LoginScreen';

import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/" component={LoginScreen} />
      <Route path="/hello" component={HelloScreen} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);