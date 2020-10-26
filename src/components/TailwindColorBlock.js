import React, { useContext, useEffect, useState } from "react";
import { FaWeightHanging } from "react-icons/fa";
import { GradientFromContext } from "../store/AppContext";

const TailwindColorBlock = (props) => {
  const weights = [100, 200, 300, 400, 500, 600, 700, 800, 900];

  const [colorName, setColorName] = useState("");

  const [
    randomColorFrom,
    randomWeightFrom,
    setRandomColorFrom,
    setRandomWeightFrom,
  ] = useContext(GradientFromContext);

  const colors = [
    {
      name: "red",
      weight: weights,
    },
    {
      name: "yellow",
      weight: weights,
    },
    {
      name: "orange",
      weight: weights,
    },
    {
      name: "pink",
      weight: weights,
    },
    {
      name: "blue",
      weight: weights,
    },
    {
      name: "teal",
      weight: weights,
    },
    {
      name: "green",
      weight: weights,
    },
  ];

  return (
    <div
      className={`bg-${props.color}-${props.weight} h-8 transform hover:scale-125`}
      onClick={() => {
        setRandomColorFrom(props.color);
        setRandomWeightFrom(props.weight);
      }}
    ></div>
  );
};

export default TailwindColorBlock;
