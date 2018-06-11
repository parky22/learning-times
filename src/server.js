import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import template from './template';

const ServerSideRenderedApp = () => {
  const appHtml = ReactDOMServer.renderToString(<App />);

  return template({ appHtml });
};

export default ServerSideRenderedApp;
