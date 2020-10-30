import React, { useContext, useState } from "react";
import { GradientFromContext } from "../store/AppContext";
import TailwindColorComponent from "./TailwindColorComponent";
import { ColorPickerContainer } from "./theme";

const ColorPicker = ({ value }) => {
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
    <div className="">
      <ColorPickerContainer>
        <p>{value === "from" ? "from" : "to"}</p>

        <main onClick={() => setShowTailwindColorComponent((prev) => !prev)}>
          <div
            className={
              value === "from"
                ? `rounded bg-${randomColorFrom}-${randomWeightFrom} p-2`
                : `rounded bg-${randomColorTo}-${randomWeightTo} p-2`
            }
          ></div>
          <div>
            <h4>
              {value === "from" ? `${randomColorFrom}` : `${randomColorTo}`}
            </h4>
            <h2>
              {value === "from" ? `${randomWeightFrom}` : `${randomWeightTo}`}
            </h2>
          </div>
        </main>
      </ColorPickerContainer>

      {showTailwindColorComponent && <TailwindColorComponent value={value} />}
    </div>
  );
};

export default ColorPicker;
