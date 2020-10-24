import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import RandomGradient from "../components/RandomGradient";
import BrowseGradient from "../components/BrowseGradient";
import { StyledLink } from "../components/theme";

const Home = () => {
  const [toggle, setToggle] = useState(true);

  const handleRandom = () => setToggle(true);
  const handleBrowse = () => setToggle(false);

  console.log(toggle);
  return (
    <div>
      <div className="flex justify-around max-w-6xl mx-auto">
        <StyledLink onClick={handleRandom} toggle={toggle}>
          Generate Random Gradient
        </StyledLink>
        <StyledLink onClick={handleBrowse} toggle={!toggle}>
          Browse Gradients
        </StyledLink>
      </div>
      {toggle ? <RandomGradient /> : <BrowseGradient />}
    </div>
  );
};

export default Home;
