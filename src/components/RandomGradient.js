import React, { useEffect, useState, useRef, useContext } from "react";
import { ButtonPrimary, DirectionArrow, StyledLink } from "./theme";
import useKeyPress from "../utils/hooks/useKeyPress";
import { motion } from "framer";
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleUp,
  FaExclamationCircle,
} from "react-icons/fa";
import useRandom from "../utils/hooks/useRandom";
import { direction } from "../utils/gradients/data";
import Select from "react-select";
import { GoArrowSmallUp } from "react-icons/go";
import DirectionArrows from "./DirectionArrows";
import { ArrowContext } from "../store/AppContext";

const colors = ["blue", "yellow", "green", "gray", "red", "orange"];
const weights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const options = [
  { value: "r", label: "Right" },
  { value: "l", label: "Left" },
  { value: "t", label: "Top" },
];

const RandomGradient = () => {
  const [randomTo, setRandomTo] = useState();
  let [spaceBar, setSpaceBar] = useKeyPress(32);
  let [randomColor, randomWeight, randomColor1, randomWeight1] = useRandom(
    spaceBar,
    colors,
    weights
  );
  let [From, setFrom] = useState("red-300");
  let [To, setTo] = useState("yellow-500");

  const [context, setContext] = useState("t");

  useEffect(() => {
    handleClick();
    return () => setSpaceBar(false);
  }, [spaceBar]);

  const handleClick = () => {
    setFrom(`${randomColor}-${randomWeight}`);
    // console.log(randomColor, "from", randomWeight);
    setTo(`${randomColor1}-${randomWeight1}`);
    // console.log(randomColor1, "to", randomWeight1);
    setRandomTo(`from-${From} to-${To}`);
  };

  // const handleDropdown = (e) => {
  //   setGradientDirection(e.value);
  // };
  // const handleDirection = (e) => {
  //   setGradientDirection("t");
  // };

  return (
    <motion.div initial={{ x: -100 }} animate={{ x: 0 }}>
      <ArrowContext.Provider value={[context, setContext]}>
        <DirectionArrows />

        <div className={`h-64 bg-gradient-to-${context} ${randomTo}`} />
        {console.log(context)}
        <div className="flex mx-auto justify-around max-w-xs items-center rounded p-2 bg-gray-200 my-4">
          <FaExclamationCircle />
          <p className="text-xs">
            Press Spacebar to Generate a random Gradient
          </p>
        </div>
        <ButtonPrimary
          className="sm:hidden flex mx-auto justify-around max-w-xs items-center my-2"
          primary
          onClick={handleClick}
        >
          Generate
        </ButtonPrimary>
      </ArrowContext.Provider>
    </motion.div>
  );
};

export default RandomGradient;
