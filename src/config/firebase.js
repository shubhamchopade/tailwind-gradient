import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDAiHVo0r2yn_OMSWxHm8DxwhWcb2_c-BI",
  authDomain: "react-auth-88b56.firebaseapp.com",
  databaseURL: "https://react-auth-88b56.firebaseio.com",
  projectId: "react-auth-88b56",
  storageBucket: "react-auth-88b56.appspot.com",
  messagingSenderId: "491935843921",
  appId: "1:491935843921:web:596835e765857e28f89a70"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase