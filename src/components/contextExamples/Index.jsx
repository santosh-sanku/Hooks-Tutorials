import React from "react";

function Index() {
  return (
    <div>
      <h1>useContext Tutorial</h1>
      <p>
        context provides a way to pass data through the component tree without
        having to pass props down manually at every level.
      </p>
      <p>Step 1 : Create Context</p>
      <p>
        Step 2 : We need to provide this context with a value, & the provider
        must wrap the children components for the value to be avilable.
      </p>
      <p>Step 3 : Consume the context value.</p>
    </div>
  );
}

export default Index;
