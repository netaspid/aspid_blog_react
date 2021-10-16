import App from './components/App';
import ReactDOM from 'react-dom';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider as ReduxProvider} from 'react-redux';
import store from './components/store';
ReactDOM.render(
    <ReduxProvider store={store}>
      <Router>
        <App/>
      </Router>
    </ReduxProvider>,
    document.getElementById('root'),
);
