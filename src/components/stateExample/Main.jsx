import React from "react";

const Main = () => {
  return (
    <div className="main">
      <div className="what">
        <h2>What are React Hooks</h2>
        <p>
          <ul>
            <li>1. Hooks are addition in from React version 16.8</li>
            <li>
              2. Hooks which allows you to use React features without having to
              write a class eg:- State of a component
            </li>
            <li>3. Hooks don't work inside classes </li>
          </ul>
        </p>
      </div>
      <div className="why">
        <h2>Why Hooks ?</h2>
        <p>
          <ul>
            <li>
              understand how <b>this</b> keyword works in javscript
            </li>
            <li>Remember to bind event handlers in class components</li>
            <li>
              classes don't minify very well and make hot reloading very
              unreliable
            </li>
          </ul>
          <ul>
            <li>There is no particular way to reuse state component logic</li>
            <li>HOC & render props patterns do address this problem</li>
            <li>Makes the code harder to follow</li>
            <li>There is need to share stateful logic in a better way</li>
          </ul>
          <ul>
            <li>
              Create components for complex scenarios such as data fetching &
              subscribing to events
            </li>
            <li>Related code is not organized in one place</li>
            <li>
              Ex: Data Fetching = In componentDidMount && componentDidUpdate
            </li>
            <li>
              Ex: Event Listeners = In componentDidMount && componentWillUnmount
            </li>
            <li>
              Because of stateful logic - cannot break components into smaller
              ones
            </li>
          </ul>
        </p>
      </div>
      <div className="notes">
        <ul>
          <h2>Noteworthy Points</h2>
          <li>React version 16.8 or higher</li>
          <li>Completely opt in</li>
          <li>Classes won't be removed from react</li>
          <li>can't use hooks inside of a class components</li>
          <li>
            Instead, Hooks provide a more direct API to the React concepts
          </li>
          <li>
            They allow yout to use React features without having to write a
            class
          </li>
          <li>Avoid the whole confusion with 'this' keyword</li>
          <li>Allow you to reuse stateful logic</li>
          <li>
            Organize the logic inside a component into reusable isolate units
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
