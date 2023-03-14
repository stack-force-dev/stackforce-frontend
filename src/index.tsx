import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';

import './i18next';
import Loader from './components/loader/Loader';

const App = lazy(() => import(/* webpackChunkName: "app-context" */ './App'));

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
