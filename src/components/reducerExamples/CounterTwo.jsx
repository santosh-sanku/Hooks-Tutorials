import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };

    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };

    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };

    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };

    case "reset":
      return initialState;

    default:
      return state;
  }
};

const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>
        useReducer 2nd example we can maintain both state and action as an
        object
      </h3>

      <div>
        <h3>useReducer Counter second Example</h3>
        <div> First Count = {count.firstCounter}</div>
        <div> Second Count = {count.secondCounter}</div>
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "increment", value: 5 })}>
          Increment by 5
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
          Decrement by 5
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "increment2", value: 3 })}>
          Increment counter 2 value by 3
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 3 })}>
          Decrement counter 2 value by 3
        </button>
      </div>
      <div className="notes">
        <h4>Advantages of using this pattern</h4>
        <p>Scenario 1 : converting string action to object</p>
        <p>
          Considering the "Value" by which we want to increment or decrement.
          Earlier the value = 1. If we want to add 2 more buttons that would
          Increment/Decrement the value by 5. Well that is easy when the action
          is an object.Now the action object has 1 property i.e action type . We
          can add the second property called "value" which should be the number
          to increment/decrement the counter. We add the property "value" = 1 &
          "value" = 5 for other 2 buttons. Back in the reducer function instead
          of hard coded value = 1 , now we specifiy action.value .
        </p>
        <br />
        <p>Scenario 2 : state as an object</p>
        <p>
          suppose you wanted to maintain 2 different counters that will be
          simple if your state is an object. You simply add another property to
          your state. Here secondCounter. Added 2 more switch cases increment2 &
          decrement2. These are for secondCounter.
        </p>
        <p>
          Now we have 2 properties in state object but when changing one at a
          time. To get the expected output we have to modifiy the return
          statements to merge the state properties. using spread operator within
          the object.
        </p>
      </div>
    </div>
  );
};

export default CounterTwo;
