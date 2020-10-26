import React, { useContext, useState } from "react";
import { ArrowContext } from "../store/AppContext";
import DirectionArrows from "./DirectionArrows";
import Picker from "./Picker";
import { DirectionArrow, PickerContainer, StyledDirectionArrow } from "./theme";

const rotateArrowData = [
  {
    direction: "tl",
    rotate: "315deg",
  },
  {
    direction: "t",
    rotate: "0",
  },
  {
    direction: "tr",
    rotate: "45deg",
  },
  {
    direction: "r",
    rotate: "90deg",
  },
  {
    direction: "br",
    rotate: "135deg",
  },
  {
    direction: "b",
    rotate: "180deg",
  },
  {
    direction: "bl",
    rotate: "225deg",
  },
  {
    direction: "l",
    rotate: "270deg",
  },
];

const PickerComponent = () => {
  const [context, setContext] = useContext(ArrowContext);
  const [showDirectionArrows, setShowDirectionArrows] = useState(false);
  return (
    <div className="grid grid-cols-3 m-2">
      <div className="m-0 transition ease-in duration-75">
        {rotateArrowData.map((data) => {
          if (data.direction === context) {
            return (
              <PickerContainer
                onClick={() => setShowDirectionArrows(!showDirectionArrows)}
                showDirectionArrows={showDirectionArrows}
              >
                <StyledDirectionArrow rotate={data.rotate} />
              </PickerContainer>
            );
          }
        })}

        {showDirectionArrows && (
          <DirectionArrows
            setContext={setContext}
            setShowDirectionArrows={setShowDirectionArrows}
          />
        )}
      </div>
      <Picker value="from" />
      <Picker value="to" />
    </div>
  );
};

export default PickerComponent;
