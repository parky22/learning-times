import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderToMarkup } from 'fela-dom';

import App from './App';
import template from './template';
import createStore from './store';
import createFelaRenderer from './style';

const ServerSideRenderedApp = () => {
  const store = createStore();
  const felaRenderer = createFelaRenderer();
  const appHtml = ReactDOMServer.renderToString(
    <StaticRouter location="" context={{}}>
      <App felaRenderer={felaRenderer} store={store} />
    </StaticRouter>
  );
  const preloadedState = store.getState();

  return template({
    appHtml,
    preloadedState,
    stylesMarkup: renderToMarkup(felaRenderer),
  });
};

export default ServerSideRenderedApp;
