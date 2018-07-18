import React from 'react';
import { hot } from 'react-hot-loader';

const App = () => {
  const onClick = () => {
    console.log("the button works");
  }

  return (
    <div>
      halooooo
      <button onClick={onClick}>CLICK ME</button>
    </div>
  );
};

export const hotApp = hot(module)(App);

export default App;
