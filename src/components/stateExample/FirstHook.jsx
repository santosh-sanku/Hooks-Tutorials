import React, { useState } from "react";

const FirstHook = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="firstHook">
        <h1>Function Based useState Hook Example</h1>
        <button onClick={() => setCount(count + 1)}>Count = {count}</button>
      </div>
      <div>
        <p>
          1. Create a component i.e Function based component
          <br />
          2. State property initailized to 0. (count)
          <br />
          3. Method capable of setting that state proprty value (setCount)
        </p>
      </div>
      <div>
        <h4>Rules of Hooks</h4>
        <b>Only call Hooks at Top Level</b>
        <p>Don't call Hooks inside loops, conditions, or nested functions</p>
        <b>only call Hooks from React Functions </b>
        <p>
          call them from within React functional components & not just from the
          regular JS function
        </p>
      </div>
    </div>
  );
};

export default FirstHook;
