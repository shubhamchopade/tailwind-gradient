import React, { useContext, useState } from "react";
import { ArrowContext } from "../store/AppContext";
import DirectionArrows from "./DirectionArrows";
import { ColorPickerContainer, StyledDirectionArrow } from "./theme";

const rotateArrowData = [
  { name: "Top Left", direction: "tl", rotate: "315deg" },
  { name: "Top", direction: "t", rotate: "0" },
  { name: "Top Right", direction: "tr", rotate: "45deg" },
  { name: "Right", direction: "r", rotate: "90deg" },
  { name: "Bottom Right", direction: "br", rotate: "135deg" },
  { name: "Bottom", direction: "b", rotate: "180deg" },
  { name: "Bottom Left", direction: "bl", rotate: "225deg" },
  { name: "Left", direction: "l", rotate: "270deg" },
];
const DirectionPicker = () => {
  const [context, setContext] = useContext(ArrowContext);
  const [showDirectionArrows, setShowDirectionArrows] = useState(false);
  return (
    <div className="m-0">
      {rotateArrowData.map((data) => {
        if (data.direction === context) {
          return (
            <>
              <ColorPickerContainer
                onClick={() => setShowDirectionArrows(!showDirectionArrows)}
                showDirectionArrows={showDirectionArrows}
              >
                <p>direction</p>
                <main>
                  <StyledDirectionArrow rotate={data.rotate} />
                  <h4>{data.name}</h4>
                </main>
              </ColorPickerContainer>
            </>
          );
        }
      })}

      {showDirectionArrows && <DirectionArrows setContext={setContext} />}
    </div>
  );
};

export default DirectionPicker;
