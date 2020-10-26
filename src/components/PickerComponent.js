import React, { useContext } from "react";
import { ArrowContext } from "../store/AppContext";
import DirectionArrows from "./DirectionArrows";
import Picker from "./Picker";

const PickerComponent = () => {
  const [context, setContext] = useContext(ArrowContext);
  return (
    <div className="grid grid-cols-3 m-2">
      <DirectionArrows setContext={setContext} />
      <Picker value="from" />
      <Picker value="to" />
    </div>
  );
};

export default PickerComponent;
