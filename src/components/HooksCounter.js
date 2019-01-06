import React, { useState } from 'react';

const HooksCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      Hooks Counter: {count}
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default HooksCounter;
