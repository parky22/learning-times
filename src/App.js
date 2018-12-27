import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';

import Home from './pages/Home';

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export const hotApp = hot(module)(App);

export default App;
