import React from 'react';
import ReactDOM from 'react-dom';

import { hotApp as App } from './App';
import createStore from './store';

const hydratedState = window.__PRELOADED_STATE__;
const store = createStore(hydratedState);

ReactDOM.hydrate(
  <App store={store} />,
  document.getElementById('app')
);
