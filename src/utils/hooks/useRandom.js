const { useEffect, useState } = require("react");

const useRandom = (spaceBar, colors, weights) => {
  const [randomColorTo, setRandomColorTo] = useState("");
  const [randomWeightTo, setRandomWeightTo] = useState("");
  const [randomColorFrom, setRandomColorFrom] = useState("");
  const [randomWeightFrom, setRandomWeightFrom] = useState("");

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

  return [randomColorFrom, randomWeightFrom, randomColorTo, randomWeightTo];
};

export default useRandom;
