import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { firebase } from "../config/firebase";
import Input from "../components/Input";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  const handleGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        var token = result.credential.accessToken;
        setIsLoggedIn(true);
        var user = result.user;
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        var email = error.email;

        var credential = error.credential;
        // ...
      });
  };

  const provider = new firebase.auth.GoogleAuthProvider();

  if (isLoggedIn) {
    history.replace("/");
  }

  return (
    <div>
      <button onClick={handleGoogle}>Google</button>
      <Input />
    </div>
  );
};

export default Login;
