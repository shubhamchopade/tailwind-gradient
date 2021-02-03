import React, { useEffect, useState, useRef, useContext } from "react";
import {
  ButtonPrimary,
  CopyButton,
  DirectionArrow,
  SaveButton,
  SaveButtonFill,
  StyledLink,
} from "./theme";
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
import firebase from "firebase";
import { CopyToClipboard } from "react-copy-to-clipboard";
import CopyToClipboardComponent from "./CopyToClipboardComponent";

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
  const [gradientSaved, setGradientSaved] = useState(false);

  const [context, setContext] = useState("r");

  useEffect(() => {
    setGradientFrom(`from-${randomColorFrom}-${randomWeightFrom}`);
  }, [randomColorFrom, randomWeightFrom, spaceBar]);

  useEffect(() => {
    setGradientTo(`to-${randomColorTo}-${randomWeightTo}`);
  }, [randomColorTo, randomWeightTo, spaceBar]);

  useEffect(() => {
    console.log(`${gradientFrom} ${gradientTo}`);
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
        .add({
          ...gradientData,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
    setGradientSaved(true);
    console.log(gradientData);
  };

  return (
    <motion.div>
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
          <div className="flex mx-auto justify-around max-w-xs items-center rounded p-2 bg-gray-200 my-4">
            <FaExclamationCircle />
            <p className="text-xs">
              Press Spacebar to Generate a random Gradient
            </p>
          </div>
          <CopyToClipboardComponent
            text={`bg-gradient-to-${context} ${gradientFrom} ${gradientTo}`}
          />

          {isLoggedIn && (
            <>
              {" "}
              {gradientSaved ? (
                <SaveButtonFill onClick={handleSaveGradient}></SaveButtonFill>
              ) : (
                <SaveButton onClick={handleSaveGradient}></SaveButton>
              )}{" "}
            </>
          )}

          <motion.div
            className={`h-screen transition-colors bg-gradient-to-${context} ${gradientFrom} ${gradientTo}`}
          />
        </ArrowContext.Provider>
      </GradientFromContext.Provider>
    </motion.div>
  );
};

export default RandomGradient;
