import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { firebase } from "../config/firebase";
import Input from "../components/Input";
import { Frame, motion } from "framer";
import styled from "styled-components";
import { FaGoogle } from "react-icons/fa";

const Button = styled(motion.button)`
  width: 250px;
  height: 50px;
  padding: 1rem;
  background: lightblue;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  const handleGoogle = () => {
    firebase
      .auth()
      .signInWithRedirect(provider)
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
      <Button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleGoogle}
        className=""
      >
        <FaGoogle />
        Continue with Google
      </Button>
      <motion.div initial={{ x: -100 }} animate={{ x: 0 }}>
        <Input setIsLoggedIn={setIsLoggedIn} />
      </motion.div>
    </div>
  );
};

export default Login;
