import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import template from './template';
import createStore from './store';

const ServerSideRenderedApp = () => {
  const store = createStore();
  const appHtml = ReactDOMServer.renderToString(<App store={store} />);
  const preloadedState = store.getState();

  return template({ appHtml, preloadedState });
};

export default ServerSideRenderedApp;
