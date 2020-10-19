import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

export const ButtonPrimary = styled.button.attrs({
  className: "px-4 py-2 rounded",
})`
  ${(props) => {
    if (props.primary) return tw`bg-red-200`;
    else if (props.secondary) return tw`border border-blue-200`;
    else return tw`border border-blue-200`;
  }}
`;
export const List = styled.ul`
  ${tw`flex m-2 justify-between`}

  ul {
    ${tw`flex`}
  }

  li {
    ${tw`p-2 hover:opacity-75`}
  }
`;
