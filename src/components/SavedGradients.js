import { motion } from "framer";
import React, { useEffect, useState } from "react";
import { firebase, projectFireStore } from "../config/firebase";
import GradientBlock from "./GradientBlock";
import Loader from "./Loader";

const SavedGradients = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      projectFireStore
        .collection("users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          setData(doc.data() ? doc.data() : null);
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

  return (
    <motion.div initial={{ x: -100 }} animate={{ x: 0 }}>
      {console.log(data)}
      {data.length != 0 ? (
        data.count.map((dat) => <GradientBlock color={dat} />)
      ) : (
        <Loader />
      )}
    </motion.div>
  );
};

export default SavedGradients;
