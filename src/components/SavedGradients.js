import { motion } from "framer";
import React, { useEffect, useState } from "react";
import { firebase, projectFireStore } from "../config/firebase";
import BrowseGradientBlock from "./BrowseGradientBlock";
import Loader from "./Loader";
import { SavedContext } from "../store/AppContext";
import SavedGradientBlock from "./SavedGradientBlock";

const SavedGradients = () => {
  let [isLoading, setIsLoading] = useState(false);
  let [gradientCount, setGradientCount] = useState();
  let [gradientData, setGradientData] = useState();

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     projectFireStore
  //       .collection("users")
  //       .doc(user.uid)
  //       .get()
  //       .then((doc) => {
  //         setGradientData(doc.data().count ? doc.data().count : null);
  //         console.log(gradientData);
  //         setIsLoading(false);
  //       });
  //   });
  // }, [gradientCount]);

  if (isLoading) return <Loader />;

  const handleGradientData = () => {
    setGradientCount([1, 2, 3, 4, 5]);
    setGradientData([7, 8, 9]);
  };

  return (
    <SavedContext.Provider
      value={[gradientCount, setGradientCount, gradientData, setGradientData]}
    >
      <SavedGradientBlock />
      <button onClick={handleGradientData}>Update on Cloud Data</button>
    </SavedContext.Provider>
  );
};

export default SavedGradients;
