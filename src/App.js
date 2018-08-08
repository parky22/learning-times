import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';

import Counter from './containers/component';

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export const hotApp = hot(module)(App);

export default App;
