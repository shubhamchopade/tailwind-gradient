import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import {firebase} from "../config/firebase";



const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => setIsLoggedIn(true))
      .catch(function (error) {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };

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

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  if (isLoggedIn) {
    history.replace("/");
  }

  return (
    <div>
      <button onClick={handleGoogle}>Google</button>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          type="email"
          onChange={handleInput}
          value={form.email}
          name="email"
        ></input>
        <input
          placeholder="Password"
          type="password"
          onChange={handleInput}
          value={form.password}
          name="password"
        ></input>
        <button secondary type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
