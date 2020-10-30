import React, { useEffect, useContext } from "react";
import { SavedContext } from "../store/AppContext";
import { firebase, projectFireStore } from "../config/firebase";

const SavedGradientBlock = () => {
  const [
    gradientCount,
    setGradientCount,
    gradientData,
    setGradientData,
  ] = useContext(SavedContext);

  console.log(gradientCount);

  //   useEffect(() => {
  //     firebase.auth().onAuthStateChanged((user) => {
  //       projectFireStore
  //         .collection("users")
  //         .doc(user.uid)
  //         .set({
  //           ...gradientData,
  //           email: user.email,
  //         });
  //     });
  //   }, [gradientCount]);

  return <div></div>;
};

export default SavedGradientBlock;
