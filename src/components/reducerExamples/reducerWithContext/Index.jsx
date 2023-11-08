import React, { useReducer } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export const CountContext = React.createContext();

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

const Index = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        Count = {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>

      <div className="notes">
        <p>
          Goal is to maintain a count state in this file & modify that state
          from component A,D & F.
        </p>
        <p>For that 2 main steps</p>
        <p>
          First : Is to create a counter in this file using the reducer hook.
        </p>
        <p>
          second : Is to provide and consume the counter context in the required
          components.
        </p>
        <p>
          we make use of context to provide the count value & dispatch method
          and consume the same from the nested components.
        </p>
        <p>
          Here we don't want to dispatch any action, we want to dispacth from
          the nested components.
        </p>

        <div>
          <p>Summary</p>
          <p>
            In this file we created the counter using reducer hook. we declared
            the initial state and defined the reducer function which modifies
            that state. we pass it as a parameter to useReducer which returns
            the current state value & dispatch method. To provide these pair of
            values we created a context called countContext. At the top most
            level we provided 2 values as an object. Finally in the neccessary
            components we use useContext to get hold of the context values and
            access the appropirate values. countDispatch & countState.
            <br />
            we are maintianing the state in Index file but we are able to share
            that state with different components nested at different levels in
            the component tree.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
