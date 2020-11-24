import { motion } from "framer";
import React from "react";
import { FaCircleNotch } from "react-icons/fa";
import styled from "styled-components";
import tw from "twin.macro";

const StyledSpinner = styled(FaCircleNotch).attrs({
  size: 30,
})`
  ${tw`text-gray-500`}
  animation: spin 2s linear infinite;
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
    <motion.div className="flex flex-col items-center h-screen justify-center">
      <p className="mb-4 text-gray-500">hold on...</p>
      <StyledSpinner />
    </motion.div>
  );
};

export default Loader;
