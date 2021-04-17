import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import BrowseGradientBlock from "../components/BrowseGradientBlock";
import tw from "twin.macro";
import { AppContext } from "../store/AppContext";
import useGetDocument from "../utils/hooks/useUpdateDocument";

const StyledDiv = styled.div`
  ${tw`grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2`}
`;

const Gallery = () => {
  const [userData, getCurrentUserData] = useState(null);
  const [isLoggedin] = useContext(AppContext);
  const gradient = useGetDocument("blue");
  gradient != null && console.log(gradient);

  return (
    <>
      <StyledDiv>
        <BrowseGradientBlock color="from-red-100 to-blue-200" />
        <BrowseGradientBlock color="from-red-100 to-blue-200" />
        <BrowseGradientBlock color="from-red-100 to-blue-200" />
      </StyledDiv>
    </>
  );
};

export default Gallery;
