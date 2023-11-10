import React from "react";

const TitleComponent = () => {
  console.log("Render Title");

  return (
    <div>
      <h3>useCallback hook</h3>
    </div>
  );
};

export default React.memo(TitleComponent);
