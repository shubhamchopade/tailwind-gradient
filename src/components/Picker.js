import React, { useContext, useState } from "react";
import { GradientFromContext } from "../store/AppContext";
import TailwindColorComponent from "./TailwindColorComponent";

const Picker = ({ value }) => {
  const [
    randomColorFrom,
    randomWeightFrom,
    setRandomColorFrom,
    setRandomWeightFrom,
    randomColorTo,
    randomWeightTo,
  ] = useContext(GradientFromContext);

  const [showTailwindColorComponent, setShowTailwindColorComponent] = useState(
    false
  );
  return (
    <div className="m-0">
      <p>
        {value === "from"
          ? `from-${randomColorFrom} - ${randomWeightFrom}`
          : `to-${randomColorTo}-${randomWeightTo}`}
      </p>
      <div
        className={
          value === "from"
            ? `w-12 h-12 bg-${randomColorFrom}-${randomWeightFrom} p-2`
            : `w-12 h-12 bg-${randomColorTo}-${randomWeightTo} p-2`
        }
        onClick={() => setShowTailwindColorComponent((prev) => !prev)}
      ></div>
      {showTailwindColorComponent && <TailwindColorComponent value={value} />}
    </div>
  );
};

export default Picker;
