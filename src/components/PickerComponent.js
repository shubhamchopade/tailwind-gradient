import React from "react";
import DirectionPicker from "./DirectionPicker";
import Picker from "./Picker";

const PickerComponent = () => {
  return (
    <div className="grid grid-cols-3 place-items-center m-2">
      <DirectionPicker />
      <Picker value="from" />
      <Picker value="to" />
    </div>
  );
};

export default PickerComponent;
