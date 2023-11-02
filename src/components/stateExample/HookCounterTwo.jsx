import React, { useState } from "react";

const HookCounterTwo = () => {
  const initialCount = 0;

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>useState with previous state</h1>

      <button> Count = {count}</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(initialCount)}> Reset </button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 5)}> Increment 5 </button>
    </div>
  );
};

export default HookCounterTwo;
