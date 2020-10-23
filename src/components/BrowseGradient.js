import { motion } from "framer";
import React from "react";
import { H1 } from "./theme";

const BrowseGradient = () => {
  return (
    <motion.div initial={{ x: 100 }} animate={{ x: 0 }}>
      <H1>Explore Beautiful Gradients</H1>
    </motion.div>
  );
};

export default BrowseGradient;
