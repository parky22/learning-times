import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as FelaProvider } from 'react-fela';

import Routes from './routes';

const App = ({ felaRenderer, store }) => {
  return (
    <ReduxProvider store={store}>
      <FelaProvider renderer={felaRenderer}>
        <Routes />
      </FelaProvider>
    </ReduxProvider>
  );
};

export const hotApp = hot(module)(App);

export default App;
