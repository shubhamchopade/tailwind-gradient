import { motion } from "framer";
import React, { useEffect, useState } from "react";
import { firebase, projectFireStore } from "../config/firebase";
import BrowseGradientBlock from "./BrowseGradientBlock";
import Loader from "./Loader";
import { SavedContext } from "../store/AppContext";
import SavedGradientBlock from "./SavedGradientBlock";
import { ButtonPrimary } from "./theme";

const SavedGradients = () => {
  let [isLoading, setIsLoading] = useState(false);
  let [gradientColor, setGradientColor] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      projectFireStore
        .collection("users")
        .doc(user.uid)
        .collection("gradients")
        .onSnapshot((snapshot) => {
          setGradientColor(snapshot.docs.map((doc) => doc.data()));
        });
    });
  }, []);

  if (isLoading) return <Loader />;

  const handleGradientColor = () => {
    console.log(gradientColor);
  };

  return (
    <>
      {/* <SavedGradientBlock /> */}
      <ButtonPrimary onClick={handleGradientColor}>Show</ButtonPrimary>
      {gradientColor.map((col) => (
        <BrowseGradientBlock color={col.classed} />
      ))}
    </>
  );
};

export default SavedGradients;
