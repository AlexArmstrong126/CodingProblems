import React, { useState } from 'react';

export function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button data-testid='decrement-button' onClick={() => decrement()}>
        -
      </button>
      <button data-testid='increment-button' onClick={() => increment()}>
        +
      </button>
      <p>clicked: {count}</p>
    </div>
  );
}

// run your code by clicking the run button on the right
