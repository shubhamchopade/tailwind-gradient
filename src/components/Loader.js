import { Frame } from "framer";
import React from "react";
import { FaSpinner } from "react-icons/fa";
import styled from "styled-components";
import tw from "twin.macro";

const StyledSpinner = styled(FaSpinner).attrs({
  size: 60,
})`
  animation: spin 2s ease-in infinite;
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
    <div className="h-full grid place-items-center mt-64">
      <Frame
        center
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        backgroundColor="none"
      >
        <StyledSpinner />
      </Frame>
    </div>
  );
};

export default Loader;
