import React from 'react';
import { useState } from 'react';

function Count() {
  const [cnt, setCount] = useState(0);

  function increment() {
    setCount(cnt + 1);
  }

  function decrement() {
    setCount(cnt - 1);
  }

  return (
    <div>
      <button onClick={increment}>+</button>
      <span>{cnt}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Count;