import React from 'react';
import ReactDOM from 'react-dom';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import App from './components/App/App';

import './index.scss';

ReactDOM.render(
  <ErrorBoundary>
    <App/>
  </ErrorBoundary>,
  document.getElementById('root')
);
