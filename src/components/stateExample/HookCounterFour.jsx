import React, { useState } from "react";

const HookCounterFour = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <div>
      <h1>useState Example using Arrays</h1>

      <button onClick={addItem}>Add a number</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>

      <p>
        when ever addItem is called , we make a copy of all the items in the
        array using the spread operator (...items). To that list of copied
        items, we simply append another object. That way we are not overwriting
        the original array.
      </p>
      <div>
        <footer>
          <h3>Summary - useState</h3>
          <ul>
            <li>
              The useState hook lets you add state to functional components
            </li>
            <li>In classes, the state is always an object</li>
            <li>
              with the useState hook, the state doesn't have to be an object
            </li>
            <li>
              It can be an array , boolean , number , string or an object etc
            </li>
            <bt />
            <ul>
              The useState hook returns an array with 2 elements.
              <li>The first element is the current value of the state</li>
              <li>The second element is a state setter function</li>
            </ul>
            <li>
              New state value depends on the previos state value ? you can pass
              a function to the setter function. The setter function will
              receive the previous state as an argument.
            </li>
            <li>
              When dealing with objects or arrays , always make sure to spread
              your state variable and then call the setter function.
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default HookCounterFour;
