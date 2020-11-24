import { motion } from "framer";
import React, { useEffect, useState } from "react";
import { firebase, projectFireStore } from "../config/firebase";
import BrowseGradientBlock from "./BrowseGradientBlock";
import Loader from "./Loader";
import { SavedContext } from "../store/AppContext";
import SavedGradientBlock from "./SavedGradientBlock";
import { ButtonPrimary } from "./theme";

const SavedGradients = () => {
  let [isLoading, setIsLoading] = useState(true);
  let [gradientColor, setGradientColor] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      projectFireStore
        .collection("users")
        .doc(user.uid)
        .collection("gradients")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setGradientColor(snapshot.docs.map((doc) => doc.data()));
        });
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Loader />;

  return (
    <>
      {/* <SavedGradientBlock /> */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="grid place-items-center grid-cols-3"
      >
        {gradientColor.map((col) => (
          <>
            <BrowseGradientBlock color={col.classed} />
          </>
        ))}
      </motion.div>
    </>
  );
};

export default SavedGradients;
