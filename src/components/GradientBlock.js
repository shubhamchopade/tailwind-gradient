import React from "react";

const GradientBlock = ({ color }) => {
  return <div className={`h-40 shadow-md bg-gradient-to-r ${color} m-2`} />;
};

export default GradientBlock;
