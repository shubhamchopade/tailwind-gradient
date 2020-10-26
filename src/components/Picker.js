import React, { useContext } from "react";
import { GradientFromContext } from "../store/AppContext";
import { ButtonPrimary } from "./theme";
import Select from "react-select";
import TailwindColorComponent from "./TailwindColorComponent";

const Picker = () => {
  const [
    randomColorFrom,
    randomWeightFrom,
    setRandomColorFrom,
    setRandomWeightFrom,
  ] = useContext(GradientFromContext);
  return (
    <>
      <div
        className={`w-12 h-12 bg-${randomColorFrom}-${randomWeightFrom} p-2`}
      ></div>
      <TailwindColorComponent />
    </>
  );
};

export default Picker;
