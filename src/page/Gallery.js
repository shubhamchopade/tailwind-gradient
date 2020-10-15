import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import GradientBlock from "../components/GradientBlock";
import tw from "twin.macro";
import { firebase } from "../config/firebase";
import SavedGradients from "../components/SavedGradients";
import { AppContext } from "../store/AppContext";

const StyledDiv = styled.div`
  ${tw`grid sm:grid-cols-3`}
`;

const Gallery = () => {
  const [userData, getCurrentUserData] = useState(null);
  const [isLoggedin] = useContext(AppContext);

  return (
    <>
      <StyledDiv>
        <GradientBlock color='from-red-100 to-blue-200' />
        <GradientBlock color='from-red-100 to-blue-200' />
        <GradientBlock color='from-red-100 to-blue-200' />
      </StyledDiv>
    </>
  );
};

export default Gallery;
