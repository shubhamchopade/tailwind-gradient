import React, { useEffect, useState } from "react";
import GradientBar from "./GradientBar";
import { Button } from "./theme";
import useKeyPress from "../utils/hooks/useKeyPress";

const colors = ["blue", "yellow", "green", "gray", "red"];
const weights = [100, 200, 300, 400, 500];

const RandomGradient = () => {
  const [randomTo, setRandomTo] = useState("from-red-400 to-red-500");

  let [spaceBar, setSpaceBar] = useKeyPress(32);

  useEffect(() => {
    handleClick();
    setSpaceBar(false);
    // console.log(spaceBar);
  }, [spaceBar]);

  const handleClick = () => {
    const randomNumber = Math.ceil(Math.random() * colors.length - 1);
    const randomNumber1 = Math.ceil(Math.random() * colors.length - 1);
    console.log(randomNumber);
    console.log(randomNumber1);
    setRandomTo(
      `from-${colors[randomNumber1]}-${weights[randomNumber1]} to-${colors[randomNumber]}-${weights[randomNumber]}`
    );
  };

  return (
    <div>
      <div className={`h-24 bg-gradient-to-r ${randomTo}`}></div>

      <Button primary onClick={handleClick}>
        Generate
      </Button>
    </div>
  );
};

export default RandomGradient;
