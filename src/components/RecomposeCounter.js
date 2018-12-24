import React from 'react';
import { withState } from 'recompose';

const enhance = withState('counter', 'setCounter', 0);

const RecomposeCounter = enhance(({ counter, setCounter }) => {
  return (
    <div>
      Recompose Count: {counter}
      <button onClick={() => setCounter(n => n + 1)}>Increment</button>
      <button onClick={() => setCounter(n => n - 1)}>Decrement</button>
    </div>
  );
});

export default RecomposeCounter;
