import { motion } from "framer";
import React, { useState } from "react";
import { BrowseLayout, H1, BrowseGridContainer } from "./theme";
import { warmColorsWeights, colors } from "../utils/gradients/data";
import BrowseGradientComponent from "./BrowseGradientComponent";

const BrowseGradient = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <H1>Explore Beautiful Gradients</H1>
      <>
        <BrowseGridContainer>
          {colors.map((color, index) => (
            <BrowseGradientComponent
              key={index}
              heading={color.name}
              colors={color.color}
              weights={warmColorsWeights}
            />
          ))}
        </BrowseGridContainer>
      </>
      ;
    </motion.div>
  );
};

export default BrowseGradient;
