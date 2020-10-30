import React, { useEffect, useState, useRef, useContext } from "react";
import { ButtonPrimary, DirectionArrow, StyledLink } from "./theme";
import useKeyPress from "../utils/hooks/useKeyPress";
import { motion } from "framer";
import { FaExclamationCircle } from "react-icons/fa";
import useRandom from "../utils/hooks/useRandom";
import DirectionArrows from "./DirectionArrows";
import {
  ArrowContext,
  GradientFromContext,
  GradientToContext,
} from "../store/AppContext";
import PickerComponent from "./PickerComponent";

const colors = [
  "blue",
  "yellow",
  "green",
  "gray",
  "red",
  "orange",
  "purple",
  "pink",
  "indigo",
];
const weights = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const RandomGradient = () => {
  let [spaceBar, setSpaceBar] = useKeyPress(32);
  const [gradientFrom, setGradientFrom] = useState();
  const [gradientTo, setGradientTo] = useState();
  let [
    randomColorFrom,
    randomWeightFrom,
    randomColorTo,
    randomWeightTo,
    setRandomColorFrom,
    setRandomWeightFrom,
    setRandomColorTo,
    setRandomWeightTo,
  ] = useRandom(spaceBar, colors, weights);

  const [context, setContext] = useState("r");

  useEffect(() => {
    handleClick();
    setSpaceBar(false);
  }, [
    randomColorFrom,
    randomColorTo,
    randomWeightFrom,
    randomWeightTo,
    spaceBar,
  ]);

  const handleClick = () => {
    setGradientFrom(`from-${randomColorFrom}-${randomWeightFrom}`);
    setGradientTo(`to-${randomColorTo}-${randomWeightTo}`);
  };

  {
    console.log(
      "from",
      randomColorFrom,
      randomWeightFrom,
      "to",
      randomColorTo,
      randomWeightTo
    );
  }

  return (
    <motion.div initial={{ x: -100 }} animate={{ x: 0 }}>
      <GradientFromContext.Provider
        value={[
          randomColorFrom,
          randomWeightFrom,
          setRandomColorFrom,
          setRandomWeightFrom,
          randomColorTo,
          randomWeightTo,
          setRandomColorTo,
          setRandomWeightTo,
        ]}
      >
        <ArrowContext.Provider value={[context, setContext]}>
          <PickerComponent />

          <motion.div
            className={`h-screen bg-gradient-to-${context} ${gradientFrom} ${gradientTo} transition duration-500`}
          />
        </ArrowContext.Provider>
      </GradientFromContext.Provider>
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
