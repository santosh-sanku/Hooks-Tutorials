import React, { useEffect, useState } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("component unmount");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      <div>
        Hooks X = {x} & Y = {y}
      </div>
      <div className="note">
        <p>
          We want the effect to be called on initial render only. The way we
          achieve that by simply passing an empty array as second parameter to
          useEffect.
          <br />
          we are basically telling react that, this effect doesnot depend on any
          prop or state.
        </p>
        <br />
        <p>
          we can mimic componetDidMount using useEffect hook by simply passing
          in an empty array as second parameter to useEffect.
        </p>
      </div>
    </div>
  );
};

export default HookMouse;
