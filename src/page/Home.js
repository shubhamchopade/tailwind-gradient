import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import RandomGradient from "../components/RandomGradient";
import BrowseGradient from "../components/BrowseGradient";
import { StyledLink } from "../components/theme";

const Home = () => {
  const [toggle, setToggle] = useState("random");

  const handleRandom = () => setToggle("random");
  const handleBrowse = () => setToggle("browse");

  console.log(toggle);
  return (
    <div>
      <div className="flex justify-around max-w-6xl">
        <StyledLink
          onClick={handleRandom}
          className={toggle === "random" && "underline"}
        >
          Generate Random Gradient
        </StyledLink>
        <StyledLink
          onClick={handleBrowse}
          className={toggle !== "random" && "underline"}
        >
          Browse Gradients
        </StyledLink>
      </div>
      {toggle === "random" ? <RandomGradient /> : <BrowseGradient />}
    </div>
  );
};

export default Home;
