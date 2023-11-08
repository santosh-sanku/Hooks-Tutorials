import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

/**
 * reducer function consist of,
 * state and action as arguments.
 * and returns the updated state.
 */
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };

    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Something went wrong.",
      };

    default:
      return state;
  }
};

const DataFetchingTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  /**
   * within component we call reducer passing in the reducer function
   * and intial state
   * useReducer returns the pair of values, which is the current state and dispatch method.
   */

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  });

  return (
    <div>
      <h3>Fetching data using useReducer and useEffect here</h3>
      {state.loading ? "Loading" : state.post.title}
      {state.error ? state.error : null}
      <div>
        <p>NOTES : </p>
        <p>step 1 : we import neccessary things.</p>
        <p>
          step 2 : we declare the initial state and define reducer function.{" "}
        </p>
        <p>
          step 3 : Invoking useReducer & useEffect to fetch the data and set the
          state.
        </p>
        <p>step 4 :</p>
      </div>
      <div>
        <p>
          SUMMARY : we replaced the useState with useReducer. In doing so we
          grouped the related state varibales together i.e initialState and also
          the state transitions grouped together i.e FETCH_SUCCESS.
        </p>
      </div>
    </div>
  );
};

export default DataFetchingTwo;
