import React from "react";
import { UserContext, ChannelContext } from "./MainContext";

const ComponentE = () => {
  return (
    <div>
      <h4>This is component E</h4>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    user context value {user} , channel context value {channel}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default ComponentE;
