import React, { useEffect, useState } from "react";
import { firebase, projectFireStore } from "../config/firebase";
import GradientBlock from "./GradientBlock";
// colors = ['from-red-100 to-green-300', 'from-red-100 to-green-300', 'from-red-100 to-green-300']

const SavedGradients = () => {
  let [data, setData] = useState(0);


  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      projectFireStore
        .collection("users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          setData(doc.data().count);
        });
    });
  }, []);

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     const db = projectFireStore.collection("users").doc(user.uid).set({
  //       email: user.email,
  //       count: data,
  //     });
  //   });
  // }, [data]);

  return (
    <div>
      {data && data.map((dat)=> <GradientBlock color={dat} />)}
    </div>
  );
};

export default SavedGradients;
