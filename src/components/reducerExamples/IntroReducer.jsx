import React from "react";

const IntroReducer = () => {
  return (
    <div>
      <h1>useReducer Hook Tutorial</h1>

      <h3>useReducer</h3>
      <p>1. useReducer is a hook that is used for state management.</p>
      <p>2. It is an alternative to useState</p>
      <p>3. What's the differnece b/w useReducer & useState</p>
      <p>useState is built using useReducer</p>
      <p>useReducer is related to reducer function.</p>

      <h3>reduce method</h3>
      <p>The reduce method will take 2 parameters</p>
      <p>The first parameter is the reducer function</p>
      <p>
        The second parameter is the initial value that the reducer function can
        make use of.
      </p>
      <p>
        for more deatils on reducer function go to Array.prototype.reduce() .
      </p>

      <h3>reducer vs useReducer</h3>
      <table>
        <tr>
          <th>reduce in Javascript</th>
          <th>useReducer in React</th>
        </tr>
        <tr>
          <td>
            array.<b>reduce</b>(<b>reducer</b> , initialValue)
          </td>
          <td>
            <b>useReducer</b>(<b>reducer</b> , initialState)
          </td>
        </tr>
        <tr>
          <td>
            singleValue = <b>reducer</b>(accumulator , itemValue)
          </td>
          <td>
            newState = <b>reducer</b>(currentState , action)
          </td>
        </tr>
        <tr>
          <td>reduce method returns a single value</td>
          <td>useReducer returns a pair of values, [newState , dispatch]</td>
        </tr>
      </table>
    </div>
  );
};

export default IntroReducer;
