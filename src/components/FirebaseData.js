import React, { useEffect, useState } from "react";
import { projectFireStore } from "../config/firebase";

const FirebaseData = () => {
  const [gradients, setGradients] = useState([]);

  useEffect(() => {
    const data = projectFireStore.collection("gradients");
    data.doc("blue").set({
      name: "San Francisco",
      state: "CA",
      country: "USA",
      capital: false,
      population: 860000,
      regions: ["west_coast", "norcal"],
    });
    data.doc("LA").set({
      name: "Los Angeles", state: "CA", country: "USA",
      capital: false, population: 3900000,
      regions: ["west_coast", "socal"] });
    data.doc("red").set({
      name: "Los Angeles", state: "CA", country: "USA",
      capital: false, population: 3900000,
      regions: ["west_coast", "socal"] });
  }, []);

  return (
    <ul>
      {/* {gradients.map((gradient) => (
        <li>{gradient.name}</li>
      ))} */}
    </ul>
  );
};

export default FirebaseData;
