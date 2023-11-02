import React, { useEffect, useState } from "react";

const EffectCounterOne = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you clicked ${count} times`;
  });

  return (
    <div>
      <h2>useEffect hook example to change the title count</h2>

      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>

      <div className="notes">
        <p>
          When we specify useEffect , we are basically requesting react to
          execute the function that is passed as an argument every time the
          component renders.
          <br />
          useEffect runs after every render of the component.
          <br />
          useEffect is placed inside the component.
        </p>
      </div>
    </div>
  );
};

export default EffectCounterOne;
