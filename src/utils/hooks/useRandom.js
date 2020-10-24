const { useEffect, useState } = require("react");

const useRandom = (spaceBar, colors, weights) => {
  const [randomColor, setRandomColor] = useState("gray");
  const [randomWeight, setRandomWeight] = useState("400");
  const [randomColor1, setRandomColor1] = useState("gray");
  const [randomWeight1, setRandomWeight1] = useState("400");

  const randomNumber = Math.ceil(Math.random() * colors.length - 1);
  const randomNumber1 = Math.ceil(Math.random() * weights.length - 1);
  const randomNumber2 = Math.ceil(Math.random() * colors.length - 1);
  const randomNumber3 = Math.ceil(Math.random() * weights.length - 1);

  useEffect(() => {
    setRandomColor(colors[randomNumber]);
    setRandomWeight(weights[randomNumber1]);
  }, [spaceBar]);

  useEffect(() => {
    setRandomColor1(colors[randomNumber2]);
    setRandomWeight1(weights[randomNumber3]);
  }, [spaceBar]);

  return [randomColor, randomWeight, randomColor1, randomWeight1];
};

export default useRandom;
