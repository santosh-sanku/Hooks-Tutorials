import React, { useState, useCallback } from "react";
import TitleComponent from "./TitleComponent";
import CountComponent from "./CountComponent";
import ButtonComponent from "./ButtonComponent";

const ParentComponent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <div>
        <h3>This is parent component</h3>
        <TitleComponent />
        <CountComponent text="Age" count={age} />
        <ButtonComponent handleClick={incrementAge}>
          Increment Age
        </ButtonComponent>
        <CountComponent text="Salary" count={salary} />
        <ButtonComponent handleClick={incrementSalary}>
          Increment salary
        </ButtonComponent>
      </div>
      <div className="notes">
        <p>
          This parent component consist of 5 things.
          <br />
          It shows the title.
          <br />
          Shows persons age. & a button that increases the pesrons age.
          <br />
          shows salary & a button that increases the salary.
          <br />
        </p>
      </div>
      <div className="scenarios">
        <p>
          Here the scenario is consider there are lots of components. Updating a
          single component is going to re-render all the other components . You
          would then see performance issue. To improve performance we need to
          restrict re-renders to only components that need to re-render . In our
          example if we increment the age, only the count component related to
          age & the button component for increment age should be re-rendered.
          The other 3 components should not re-reneder. Similar with case with
          salary.
        </p>
        <p>
          We use React.memo to optimise this. React.memo is a HOC that will
          prevent functional component from being re-rendered if its props or
          state do not change. <br />
          NOTE : - React.memo has nothing to do with hooks.
          <br />
          In al the 3 components when exporting wrap your components with
          React.memo("component-name").
        </p>
        <h3>useCallback Hook</h3>
        <p>
          <b>What ?</b>
          <br />
          useCallback is a hook that will return a memorized version of the
          callback function that only changes if one of the dependecies has
          changed.
          <br />
          <b>Why ?</b>
          <br />
          It is usefull when passing callbacks to optimized child components
          that rely on reference equality to prevent unncessary renders.
          <b>How ?</b>
          <br />
          1. Import useCallback from React.
          <br />
          2. We need to call useCallback, which accepts the callback function as
          its first parameter & array of dependecies as second parameter.
          <br />
          <a
            href="https://kentcdodds.com/blog/usememo-and-usecallback"
            target="blank"
          >
            When to useMemo and useCallback
          </a>
        </p>
      </div>
    </div>
  );
};

export default ParentComponent;
