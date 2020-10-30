import { motion } from "framer";
import React, { useState } from "react";
import styled from "styled-components";
import BrowseGradientBlock from "../components/BrowseGradientBlock";
import tw from "twin.macro";
import { BrowseLayout, H1, BrowseGridContainer } from "./theme";
import { warmColorsWeights, colors } from "../utils/gradients/data";
import BrowseGradientComponent from "./BrowseGradientComponent";

const BrowseGradient = () => {
  let [From, setFrom] = useState("red-300");
  let [To, setTo] = useState("yellow-500");

  return (
    <motion.div initial={{ x: 100 }} animate={{ x: 0 }}>
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
