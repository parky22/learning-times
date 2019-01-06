import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';

import Counter from './containers/component';
import RecomposeCounter from './components/RecomposeCounter';
import HooksCounter from './components/HooksCounter';

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <div>
        <Counter />
        <RecomposeCounter />
        <HooksCounter />
      </div>
    </Provider>
  );
};

export const hotApp = hot(module)(App);

export default App;
