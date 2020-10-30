import React, { useContext } from "react";
import { GradientFromContext } from "../store/AppContext";
import { ColorBlock } from "./theme";

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
      <ColorBlock
        className={`bg-${props.color}-${props.weight} h-4 transform`}
        onClick={() => {
          if (props.value === "from") {
            setRandomColorFrom(props.color);
            setRandomWeightFrom(props.weight);
          } else {
            setRandomColorTo(props.color);
            setRandomWeightTo(props.weight);
          }
        }}
      ></ColorBlock>
    </>
  );
};

export default TailwindColorBlock;
