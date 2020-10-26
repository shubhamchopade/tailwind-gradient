import React, { useContext, useEffect, useState } from "react";
import TailwindColorBlock from "./TailwindColorBlock";

const TailwindColorComponent = ({ value }) => {
  const weights = [100, 200, 300, 400, 500, 600, 700, 800, 900];

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
    <div className="grid grid-cols-9 min-w-xl rounded">
      {colors.map((col) =>
        col.weight.map((wei) => (
          <>
            <TailwindColorBlock
              color={col.name}
              weight={wei}
              value={value}
            ></TailwindColorBlock>
          </>
        ))
      )}
    </div>
  );
};

export default TailwindColorComponent;
