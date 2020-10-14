import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const abc = "from-teal-400 to-blue-500";

export const Button = styled.button`
  ${(props) =>
    props.primary
      ? tw`p-2 bg-red-500 hover:bg-red-700 rounded m-2 text-white`
      : tw`p-2 border border-red-500 hover:bg-red-500 rounded m-2 text-red-500 hover:text-white`}
  ${(props) => {
    switch (props.color) {
      case red:
        tw`p-2 w-1/2 bg-red-500 hover:bg-red-700 rounded m-2 text-white`;
        break;
      case blue:
        tw`p-2 w-1/2 bg-blue-500 hover:bg-blue-700 rounded m-2 text-white`;
        break;
      case yellow:
        tw`p-2 w-1/2 bg-yellow-500 hover:bg-yellow-700 rounded m-2 text-white`;
        break;

      default:tw`p-2 w-1/2 bg-gray-500 hover:bg-red-700 rounded m-2 text-white`;
        break;
    }
  }}
`;

// export const GradientBar = styled.div.attrs({
//   className: `bg-gradient-to-r ${(props) =>
//     props.randomTo ? console.log("received") : null}`,
// })`
//   height: calc(100vh - 100px);
// `;

export const List = styled.ul`
  ${tw`flex m-2 justify-between`}

  ul {
    ${tw`flex`}
  }

  li {
    ${tw`p-2 hover:opacity-75`}
  }
`;
