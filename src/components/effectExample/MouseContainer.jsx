import React, { useState } from "react";
import HookMouse from "./HookMouse";

const MouseContainer = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <HookMouse />}

      <div className="notes">
        <p>
          When you want to execute some component cleanup code you included in a
          function & return that function from the function passed to the
          useEffect.
          <br />
          The clean up code is for example , cancellation of subscription,
          Timers , or even removing event handlers.
        </p>
      </div>
    </div>
  );
};

export default MouseContainer;
