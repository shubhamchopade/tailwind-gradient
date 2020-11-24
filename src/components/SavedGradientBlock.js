import React, { useEffect, useContext } from "react";
import { SavedContext } from "../store/AppContext";
import { firebase, projectFireStore } from "../config/firebase";

const SavedGradientBlock = ({}) => {
  const [gradientData, setGradientData] = useContext(SavedContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      projectFireStore
        .collection("users")
        .doc(user.uid)
        .collection("gradients")
        .add({ ...gradientData });
    });
  }, [gradientData]);
};

export default SavedGradientBlock;
