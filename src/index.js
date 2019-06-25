import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { BrowserRouter as Router } from ‘react-router-dom’;

ReactDOM.render(<Router exact path='/' component{App}>
  </Router>, document.getElementById(‘root’));
