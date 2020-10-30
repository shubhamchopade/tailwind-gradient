import React from "react";

const BrowseGradientBlock = ({ color }) => {
  return (
    <div
      className={`h-40 shadow-md bg-gradient-to-t ${color} m-2 w-9/11 rounded`}
    />
  );
};

export default BrowseGradientBlock;
