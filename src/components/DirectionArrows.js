import React, { useState, useContext } from "react";
import { ArrowContext } from "../store/AppContext";
import { DirectionArrow } from "./theme";

const DirectionArrows = ({ setContext }) => {
  return (
    <div className="w-32 mt-2 bg-gray-200 rounded shadow-md absolute z-10">
      <div className="flex justify-between">
        <DirectionArrow onClick={() => setContext("tl")} rotate="315deg" />
        <DirectionArrow onClick={() => setContext("t")} rotate="" />
        <DirectionArrow onClick={() => setContext("tr")} rotate="45deg" />
      </div>
      <div className="flex justify-between">
        <DirectionArrow onClick={() => setContext("l")} rotate="270deg" />
        <DirectionArrow onClick={() => setContext("r")} rotate="90deg" />
      </div>
      <div className="flex justify-between">
        <DirectionArrow onClick={() => setContext("bl")} rotate="225deg" />
        <DirectionArrow onClick={() => setContext("b")} rotate="180deg" />
        <DirectionArrow onClick={() => setContext("br")} rotate="135deg" />
      </div>
    </div>
  );
};

export default DirectionArrows;
