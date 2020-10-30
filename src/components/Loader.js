import { motion } from "framer";
import React from "react";
import { FaCircleNotch } from "react-icons/fa";
import styled from "styled-components";
import tw from "twin.macro";

const StyledSpinner = styled(FaCircleNotch).attrs({
  size: 60,
})`
  ${tw`text-orange-500`}
  animation: spin 2s ease-in-out infinite;
  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => {
  return (
    <motion.div className="flex items-center h-screen justify-center">
      <StyledSpinner />
    </motion.div>
  );
};

export default Loader;
