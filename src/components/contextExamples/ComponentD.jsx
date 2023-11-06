import React, { useContext } from "react";
import { UserContext, ChannelContext } from "./MainContext";

const ComponentD = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      <hr />
      <h4>This is component D</h4>

      <div>
        {user} & {channel}
      </div>
      <p>Context hook usuage in react</p>
      <p>step 1 : Import useContext from React</p>
      <p>
        step 2 : Import the neccessary context i.e here UserConext &
        ChannelContext
      </p>
      <p>
        step 3 : call the useContext function passing in the context as its
        argument
      </p>
      <p>
        Now the useContext returns the context value, so assign the function to
        a variable.
      </p>
      <p>Now we can use this values as required.</p>
      <p>The above is the example of context consumption. </p>
      <hr />
    </div>
  );
};

export default ComponentD;
