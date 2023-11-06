import React from "react";
import ComponentC from "./ComponentC";
import Index from "./Index";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const MainContext = () => {
  return (
    <div>
      <Index />
      <h2>This is the Main Context function for useEffect</h2>
      <UserContext.Provider value={"santosh"}>
        <ChannelContext.Provider value={"kumar"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default MainContext;
