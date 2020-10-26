const { useEffect, useState } = require("react");

const useRandom = (spaceBar, colors, weights, gradientFrom) => {
  const [randomColorFrom, setRandomColorFrom] = useState("red");
  const [randomWeightFrom, setRandomWeightFrom] = useState("400");
  const [randomColorTo, setRandomColorTo] = useState("yellow");
  const [randomWeightTo, setRandomWeightTo] = useState("500");

  const randomColorToNumber = Math.ceil(Math.random() * colors.length - 1);
  const randomWeightToNumber = Math.ceil(Math.random() * weights.length - 1);

  const randomColorFromNumber = Math.ceil(Math.random() * colors.length - 1);
  const randomWeightFromNumber = Math.ceil(Math.random() * weights.length - 1);

  useEffect(() => {
    setRandomColorTo(colors[randomColorToNumber]);
    setRandomWeightTo(weights[randomWeightToNumber]);
    setRandomColorFrom(colors[randomColorFromNumber]);
    setRandomWeightFrom(weights[randomWeightFromNumber]);
    // console.log(weights[randomWeightFromNumber]);
  }, [spaceBar]);

  return [
    randomColorFrom,
    randomWeightFrom,
    randomColorTo,
    randomWeightTo,
    setRandomColorFrom,
    setRandomWeightFrom,
    setRandomColorTo,
    setRandomWeightTo,
  ];
};

export default useRandom;
