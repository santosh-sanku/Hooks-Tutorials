import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return initialState;

    default:
      return state;
  }
};

const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>useReducer Counter Example</h3>
      <div> Count = {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>

      <div className="notes">
        <p>1. Import useReducer from react.</p>
        <p>
          2.within our component we call useReducer, passing in the reducer
          function and intial state.
        </p>
        <p>3. The intialState is set to 0 i.e count value.</p>
        <p>
          4. The reducer function accepts the current state & action & return
          new state depending on the action.
        </p>
        <p>5. action condition i.e switch case.</p>
        <p>6. the call to reducer return the pair of values.</p>
        <p>i.e the current value of the state i.e count value here.</p>
        <p>
          and a dispatch method which is capable to accepting an action to
          execute the code specified in the render function.
        </p>
      </div>
    </div>
  );
};

export default CounterOne;
