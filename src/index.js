import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { store } from './redux/store';
import { ErrorBoundary } from 'react-error-boundary';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Fragment>
    <ErrorBoundary fallback={<h1>Problem</h1>}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ErrorBoundary>
  </Fragment>
);
