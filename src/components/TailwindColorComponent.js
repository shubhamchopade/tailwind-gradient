import React, { useContext, useEffect, useState } from "react";
import { FaWeightHanging } from "react-icons/fa";
import { GradientFromContext } from "../store/AppContext";
import TailwindColorBlock from "./TailwindColorBlock";

const TailwindColorComponent = () => {
  const weights = [100, 200, 300, 400, 500, 600, 700, 800, 900];

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
    <div className="grid grid-cols-9 max-w-xl">
      {colors.map((col) =>
        col.weight.map((wei) => (
          <>
            <TailwindColorBlock
              color={col.name}
              weight={wei}
            ></TailwindColorBlock>
          </>
        ))
      )}
    </div>
  );
};

export default TailwindColorComponent;
