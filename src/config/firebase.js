import firebase from "firebase";
import "firebase/firestore";
import "firebase/firebase-functions";

var firebaseConfig = {
  apiKey: "AIzaSyDAiHVo0r2yn_OMSWxHm8DxwhWcb2_c-BI",
  authDomain: "react-auth-88b56.firebaseapp.com",
  databaseURL: "https://react-auth-88b56.firebaseio.com",
  projectId: "react-auth-88b56",
  storageBucket: "react-auth-88b56.appspot.com",
  messagingSenderId: "491935843921 ",
  appId: "1:491935843921:web:596835e765857e28f89a70",
  measurementId: "G-F8RL8NB6KE",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const firebaseFunctions = firebase.functions();

export { firebase, projectFireStore, projectStorage, firebaseFunctions };
