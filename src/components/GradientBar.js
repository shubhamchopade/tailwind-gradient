import React from "react";

const GradientBar = ({ randomTo, secondary }) => {
  console.log(randomTo);
  return (
    <div className={`bg-gradient-to-r ${randomTo}`}></div>
  )
};

export default GradientBar;
