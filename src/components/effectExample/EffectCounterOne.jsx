import React, { useEffect, useState } from "react";

const EffectCounterOne = () => {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect - updating document title");
    document.title = `you clicked ${count} times`;
  }, [count]);

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

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="notes">
        <p>
          There is no neccessity to update the title if it is not changing
          between renders.
          <br />
          For conditionally executing an effect, we pass in second parameter,
          This parameter is an array.
          <br />
          In this array we need to pass <b>props</b> or <b>state</b> to watch
          for.
          <br />
          only those props or state specified in this array were to change the
          effect would be executed.
          <br />
          For our example we need the effect to be changed only when the count
          value changes.
        </p>
      </div>
    </div>
  );
};

export default EffectCounterOne;
