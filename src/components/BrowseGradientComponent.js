import React from "react";
import { BrowseLayout } from "./theme";
import BrowseGradientBlock from "../components/BrowseGradientBlock";

const BrowseGradientComponent = ({ heading, colors, weights }) => {
  return (
    <div className="border border-gray-200 rounded p-2 my-4">
      <h2>{heading}</h2>
      <BrowseLayout>
        {colors.map((GradColor) => (
          <BrowseGradientBlock
            color={`from-${GradColor.from}-300 to-${GradColor.to}-200`}
          />
        ))}
      </BrowseLayout>
    </div>
  );
};

export default BrowseGradientComponent;
