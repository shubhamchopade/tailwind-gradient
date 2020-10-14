import React, { useEffect, useState } from "react";
import GradientBar from "./GradientBar";
import { ButtonPrimary } from "./theme";
import useKeyPress from "../utils/hooks/useKeyPress";

const colors = ["blue", "yellow", "green", "gray", "red", "orange"];
const weights = [100, 200, 300, 400, 500, 600];

const RandomGradient = () => {
  const [randomTo, setRandomTo] = useState("from-red-400 to-red-500");
  const [switched, setSwitched] = useState(false);

  let [spaceBar, setSpaceBar] = useKeyPress(32);

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

  const handleSwitch = () => {
    setSwitched(!switched);
  };

  return (
    <div>
      <ButtonPrimary secondary onClick={handleSwitch}>
        Switch
      </ButtonPrimary>
      {switched ? (
        <div className={`h-screen bg-gradient-to-r ${randomTo}`}> 2 color</div>
      ) : (
        <div
          className={`h-24 bg-gradient-to-r from-${colors[randomNumber()]}-${
            weights[randomNumber()]
          } via-${colors[randomNumber()]}-${weights[randomNumber()]} to-${
            colors[randomNumber()]
          }-${weights[randomNumber()]}`}
        >
          3 color
        </div>
      )}

      <ButtonPrimary primary onClick={handleClick}>
        Generate
      </ButtonPrimary>
    </div>
  );
};

export default RandomGradient;
