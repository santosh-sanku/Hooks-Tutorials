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

const CounterThree = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>multiple useReducer Example</h3>
      <div> Count = {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <br />
      <div>
        <div> Count Two = {countTwo}</div>
        <button onClick={() => dispatchTwo("reset")}>Reset</button>
        <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
        <button onClick={() => dispatchTwo("increment")}>Increment</button>
      </div>
      <p>
        When dealing with multiple state variables, that have the same state
        tranisition it is a good idea to have multiple useReducers making use of
        the same reducer funtion. This will avoild the complexity of merging the
        state if it were to be an object & also prevents us from duplicating
        code in reducer function.
      </p>
    </div>
  );
};

export default CounterThree;
