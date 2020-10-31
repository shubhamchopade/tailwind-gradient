import React from "react";

const BrowseGradientBlock = ({ color }) => {
  return (
    <div
      className={`h-40 shadow-md bg-gradient-to-r ${color} w-3/4 m-2 rounded`}
    />
  );
};

export default BrowseGradientBlock;
