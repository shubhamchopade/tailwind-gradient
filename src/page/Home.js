import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import RandomGradient from "../components/RandomGradient";
import BrowseGradient from "../components/BrowseGradient";
import { StyledLink } from "../components/theme";
import Footer from "../components/Footer";
import { motion } from "framer";

const Home = () => {
  const [toggle, setToggle] = useState(true);

  const handleRandom = () => setToggle(true);
  const handleBrowse = () => setToggle(false);

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      transition: { ease: "easeIn", duration: 2 },
    },
    out: {
      opacity: 0,
      x: "-100vw",
      transition: { ease: "easeIn", duration: 1.5 },
    },
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
    >
      <div className="flex justify-around max-w-6xl mx-auto ">
        <StyledLink onClick={handleRandom} toggle={toggle}>
          Generate Random Gradient
        </StyledLink>
        <StyledLink onClick={handleBrowse} toggle={!toggle}>
          Browse Gradients
        </StyledLink>
      </div>
      {toggle ? <RandomGradient /> : <BrowseGradient />}
      <Footer />
    </motion.div>
  );
};

export default Home;
