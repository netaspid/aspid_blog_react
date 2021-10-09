import App from './components/App';
import ReactDOM from 'react-dom';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <Router>
      <App/>
    </Router>,
    document.getElementById('root'),
);
