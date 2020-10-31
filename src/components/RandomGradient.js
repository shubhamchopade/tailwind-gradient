import React, { useEffect, useState, useRef, useContext } from "react";
import { ButtonPrimary, DirectionArrow, StyledLink } from "./theme";
import useKeyPress from "../utils/hooks/useKeyPress";
import { motion } from "framer";
import { FaExclamationCircle } from "react-icons/fa";
import useRandom from "../utils/hooks/useRandom";
import {
  AppContext,
  ArrowContext,
  GradientFromContext,
  GradientToContext,
  SavedContext,
} from "../store/AppContext";
import PickerComponent from "./PickerComponent";
import { projectFireStore } from "../config/firebase";

const RandomGradient = () => {
  let spaceBar = useKeyPress(32);
  const [gradientFrom, setGradientFrom] = useState();
  const [gradientTo, setGradientTo] = useState();
  const [
    randomColorFrom,
    randomWeightFrom,
    randomColorTo,
    randomWeightTo,
    setRandomColorFrom,
    setRandomWeightFrom,
    setRandomColorTo,
    setRandomWeightTo,
  ] = useRandom(spaceBar);
  const [gradientData, setGradientData] = useContext(SavedContext);
  const [isLoggedIn, user] = useContext(AppContext);

  const [context, setContext] = useState("r");

  useEffect(() => {
    setGradientFrom(`from-${randomColorFrom}-${randomWeightFrom}`);
  }, [randomColorFrom, randomWeightFrom, spaceBar]);

  useEffect(() => {
    setGradientTo(`to-${randomColorTo}-${randomWeightTo}`);
  }, [randomColorTo, randomWeightTo, spaceBar]);

  useEffect(() => {
    console.log(`${gradientFrom} ${gradientTo}`);
    console.log(gradientData);
    setGradientData({
      name: 2,
      classed: `${gradientFrom} ${gradientTo}`,
    });
  }, [gradientFrom, gradientTo, spaceBar]);

  const handleSaveGradient = () => {
    gradientData.length != 0 &&
      projectFireStore
        .collection("users")
        .doc(user.uid)
        .collection("gradients")
        .add({ ...gradientData });
    console.log(gradientData);
  };

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
          <ButtonPrimary onClick={handleSaveGradient}>
            Save Gradient
          </ButtonPrimary>
          <motion.div
            className={`h-screen bg-gradient-to-${context} ${gradientFrom} ${gradientTo}`}
          />
        </ArrowContext.Provider>
      </GradientFromContext.Provider>
      <div className="flex mx-auto justify-around max-w-xs items-center rounded p-2 bg-gray-200 my-4">
        <FaExclamationCircle />
        <p className="text-xs">Press Spacebar to Generate a random Gradient</p>
      </div>
    </motion.div>
  );
};

export default RandomGradient;
