import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link, NavLink } from "react-router-dom";

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
  ${tw`flex m-2 justify-between items-center`}

  ul {
    ${tw`flex`}
  }

  li {
    ${tw`p-2 hover:opacity-75`}

    &:active {
      ${tw`underline`}
    }
  }
`;

export const H1 = styled.h1`
  ${tw`text-5xl text-gray-700 text-center`}
`;

export const StyledLink = styled.a`
  ${tw`text-sm text-gray-600 cursor-pointer my-6 p-2 active:underline`}
  ${({ toggle }) => {
    if (toggle) return tw`text-gray-800 underline`;
    else return "";
  }}
`;

export const BrowseLayout = styled.section`
  ${tw`grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2`}
`;
export const BrowseGridContainer = styled.section`
  ${tw`max-w-6xl mx-auto p-2 my-4`}

  h2 {
    ${tw`pl-2 text-gray-500 uppercase`}
  }
`;
