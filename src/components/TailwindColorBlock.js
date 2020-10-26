import React, { useContext } from "react";
import { GradientFromContext } from "../store/AppContext";

const TailwindColorBlock = (props) => {
  const [
    randomColorFrom,
    randomWeightFrom,
    setRandomColorFrom,
    setRandomWeightFrom,
    randomColorTo,
    randomWeightTo,
    setRandomColorTo,
    setRandomWeightTo,
  ] = useContext(GradientFromContext);

  return (
    <>
      <div
        className={`bg-${props.color}-${props.weight} h-4 transform hover:scale-125`}
        onClick={() => {
          if (props.value === "from") {
            setRandomColorFrom(props.color);
            setRandomWeightFrom(props.weight);
          } else {
            setRandomColorTo(props.color);
            setRandomWeightTo(props.weight);
          }
        }}
      ></div>
    </>
  );
};

export default TailwindColorBlock;
