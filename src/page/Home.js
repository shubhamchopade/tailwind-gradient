import React, { useState } from "react";
import RandomGradient from "../components/RandomGradient";
import BrowseGradient from "../components/BrowseGradient";
import { StyledLink } from "../components/theme";
import Footer from "../components/Footer";
import { motion } from "framer";

const Home = () => {
  const [toggle, setToggle] = useState(true);

  const handleRandom = () => setToggle(true);
  const handleBrowse = () => setToggle(false);

  return (
    <motion.div>
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
