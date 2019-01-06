import React from 'react';
import ReactDOM from 'react-dom';

import { hotApp as App } from './App';
import createStore from './store';
import createFelaRenderer from './style';

const hydratedState = window.__PRELOADED_STATE__;
const store = createStore(hydratedState);
const felaRenderer = createFelaRenderer();

ReactDOM.hydrate(
  <App felaRenderer={felaRenderer} store={store} />,
  document.getElementById('app')
);
