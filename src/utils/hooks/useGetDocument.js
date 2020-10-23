import React, { useEffect, useState } from "react";
import { projectFireStore } from "../../config/firebase";

const useGetDocument = (grad, data) => {
  const [gradient, setGradient] = useState("red");

  const docRef = projectFireStore.collection("gradients").doc(grad);

  useEffect(() => {
    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setGradient(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, []);

  return gradient;
};

export default useGetDocument;
