import { motion } from "framer";
import React, { useEffect, useState } from "react";
import { firebase, projectFireStore } from "../config/firebase";
import BrowseGradientBlock from "./BrowseGradientBlock";
import Loader from "./Loader";

const SavedGradients = () => {
  let [data, setData] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      projectFireStore
        .collection("users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          setData(doc.data() ? doc.data() : null);
          setIsLoading(false);
        });
    });
  }, []);

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     projectFireStore.collection("users").doc(user.uid).set({
  //       email: user.email,
  //       count: data,
  //     });
  //   });
  // }, []);

  if (isLoading) return <Loader />;

  return (
    <motion.div initial={{ x: -100 }} animate={{ x: 0 }}>
      {data === null ? (
        <p>No Saved Gradients</p>
      ) : (
        data.count.map((dat) => <BrowseGradientBlock color={dat} />)
      )}
    </motion.div>
  );
};

export default SavedGradients;
