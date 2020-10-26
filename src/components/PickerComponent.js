import React from "react";
import DirectionPicker from "./DirectionPicker";
import ColorPicker from "./ColorPicker";

const PickerComponent = () => {
  return (
    <div className="grid grid-cols-3 place-items-center m-2">
      <DirectionPicker />
      <ColorPicker value="from" />
      <ColorPicker value="to" />
    </div>
  );
};

export default PickerComponent;
