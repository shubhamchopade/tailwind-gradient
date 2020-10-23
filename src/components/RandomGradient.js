import React, { useEffect, useState, useRef } from "react";
import GradientBar from "./GradientBar";
import { ButtonPrimary, StyledLink } from "./theme";
import useKeyPress from "../utils/hooks/useKeyPress";
import FirebaseData from "./FirebaseData";
import useGetDocument from "../utils/hooks/useGetDocument";
import { motion } from "framer";
import { FaExclamationCircle } from "react-icons/fa";

const colors = ["blue", "yellow", "green", "gray", "red", "orange"];
const weights = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const RandomGradient = () => {
  const [randomTo, setRandomTo] = useState("from-red-400 to-red-500");
  const [switched, setSwitched] = useState(true);
  let [spaceBar, setSpaceBar] = useKeyPress(32);

  // const data = useGetDocument("green");

  useEffect(() => {
    handleClick();
    setSpaceBar(false);
    // console.log(spaceBar);
  }, [spaceBar]);

  const randomNumber = () => {
    const random = Math.ceil(Math.random() * colors.length - 1);
    return random;
  };

  const handleClick = () => {
    setRandomTo(
      `from-${colors[randomNumber()]}-${weights[randomNumber()]} to-${
        colors[randomNumber()]
      }-${weights[randomNumber()]}`
    );
  };

  return (
    <motion.div initial={{ x: -100 }} animate={{ x: 0 }}>
      {switched && (
        <motion.div className={`h-64 bg-gradient-to-r ${randomTo}`}>
          <FirebaseData />
        </motion.div>
      )}

      <div className="flex mx-auto justify-around max-w-xs items-center rounded p-2 bg-gray-200 my-4">
        <FaExclamationCircle />
        <p className="text-xs">Press Spacebar to Generate a random Gradient</p>
      </div>
      <ButtonPrimary
        className="sm:hidden flex mx-auto justify-around max-w-xs items-center my-2"
        primary
        onClick={handleClick}
      >
        Generate
      </ButtonPrimary>
    </motion.div>
  );
};

export default RandomGradient;
