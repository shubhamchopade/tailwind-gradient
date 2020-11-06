import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { GoArrowSmallUp } from "react-icons/go";
import { FaLongArrowAltUp } from "react-icons/fa";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { AiOutlineCopy } from "react-icons/ai";
import { motion } from "framer";

export const ButtonPrimary = styled(motion.button).attrs({
  className: "px-4 py-2 rounded flex items-center justify-around",
})`
  ${(props) => {
    if (props.primary) return tw`bg-blue-500 text-white max-w-xs w-full`;
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

  div {
    ${tw`px-2 py-1 cursor-pointer active:bg-gray-100`}
    ${({ toggle }) => (toggle ? tw`bg-gray-200 rounded-xl` : "")}
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

export const DirectionArrow = styled(FaLongArrowAltUp).attrs({
  size: 40,
  color: "#2a2a2a",
})`
  transform: rotate(${({ rotate }) => rotate});
  ${tw`cursor-pointer hover:opacity-75 rounded-full active:border`}
`;

export const StyledDirectionArrow = styled(FaLongArrowAltUp).attrs({
  size: 35,
  color: "#2a2a2a",
})`
  transform: rotate(${({ rotate }) => rotate});
  ${tw`m-auto`}
`;

export const PickerContainer = styled.div`
  ${tw`w-16 border h-10 active:bg-gray-200 `}
  ${(props) => props.showDirectionArrows && tw`bg-gray-200 `}
`;

export const ColorPickerContainer = styled.section`
  ${tw`sm:w-32 w-24 cursor-pointer`}

  p {
    ${tw`text-gray-500 text-xs`}
  }

  main {
    ${tw`grid grid-cols-2 h-16 border rounded`}
    ${(props) => props.showDirectionArrows && tw`bg-gray-200 `}

    div {
      ${tw`sm:w-full w-8 text-center`}
    }
    h4 {
      ${tw`text-gray-800 text-xs my-auto uppercase tracking-wider`}
    }
    h2 {
      ${tw`text-gray-600 font-bold text-2xl tracking-tight`}
    }
  }
`;

export const ColorBlock = styled.div`
  &:hover {
    border: 1px solid #fff;
  }
`;

export const NavUserInfo = styled.div`
  ${tw`m-auto flex items-center`}
  p {
    ${tw`text-xs `}
  }
  img {
    ${tw`rounded-full ml-2 w-12`}
  }
`;

export const SaveButton = styled(BsHeart).attrs({
  size: 25,
})`
  ${tw`cursor-pointer p-1 rounded-full bg-white text-gray-800 hover:opacity-75 absolute right-0 m-8`}
`;

export const SaveButtonFill = styled(BsHeartFill).attrs({
  size: 25,
})`
  ${tw`cursor-pointer p-1 rounded-full bg-white text-gray-800 hover:opacity-75 absolute right-0 m-8`}
`;
export const CopyButton = styled(AiOutlineCopy).attrs({
  size: 30,
})`
  ${tw`cursor-pointer p-1 rounded-full bg-white text-gray-800 hover:opacity-75 absolute left-0 m-8`}
`;
