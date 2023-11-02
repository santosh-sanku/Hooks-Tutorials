import React from "react";
import Main from "./Main";
import ClassCounter from "./ClassCounter";
import FirstHook from "./FirstHook";
import HookCounterTwo from "./HookCounterTwo";
import HookCounterThree from "./HookCounterThree";
import HookCounterFour from "./HookCounterFour";

const IndexState = () => {
  return (
    <div>
      <Main />
      <hr />
      <ClassCounter />
      <hr />
      <FirstHook />
      <hr />
      <HookCounterTwo />
      <hr />
      <HookCounterThree />
      <hr />
      <HookCounterFour />
    </div>
  );
};

export default IndexState;
