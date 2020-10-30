import { motion } from "framer";
import React, { useContext, useEffect, useState } from "react";
import TailwindColorBlock from "./TailwindColorBlock";

const TailwindColorComponent = ({ value }) => {
  const weights = [100, 200, 300, 400, 500, 600, 700, 800, 900];

  const colors = [
    {
      name: "gray",
      weight: weights,
    },
    {
      name: "red",
      weight: weights,
    },
    {
      name: "orange",
      weight: weights,
    },
    {
      name: "yellow",
      weight: weights,
    },
    {
      name: "green",
      weight: weights,
    },
    {
      name: "teal",
      weight: weights,
    },
    {
      name: "blue",
      weight: weights,
    },
    {
      name: "indigo",
      weight: weights,
    },
    {
      name: "purple",
      weight: weights,
    },
  ];

  return (
    <motion.div
      initial={{ y: -10 }}
      animate={{ y: 0 }}
      final={{ y: -10 }}
      className="grid grid-cols-9 w-32 mt-2 absolute rounded"
    >
      {colors.map((col) =>
        col.weight.map((wei, index) => (
          <div className="">
            <TailwindColorBlock
              key={index}
              color={col.name}
              weight={wei}
              value={value}
            ></TailwindColorBlock>
          </div>
        ))
      )}
    </motion.div>
  );
};

export default TailwindColorComponent;
