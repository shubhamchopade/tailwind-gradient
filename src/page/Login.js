import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { firebase } from "../config/firebase";
import Input from "../components/Input";
import { Frame, motion } from "framer";
import styled from "styled-components";
import { FaGoogle } from "react-icons/fa";
import Signup from "../components/Signup";

const Button = styled(motion.button)`
  width: 270px;
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
  const provider = new firebase.auth.GoogleAuthProvider();
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

  if (isLoggedIn) {
    history.replace("/");
  }

  return (
    <div>
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="flex items-center justify-center flex-col bg-blue-200 bg-opacity-25"
      >
        <h2 class="my-6 text-center text-xl leading-9 font-bold text-gray-700">
          Login to your account
        </h2>
        <Button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleGoogle}
          className=""
        >
          <FaGoogle />
          Continue with Google
        </Button>
        <p className="text-center text-gray-500 my-4">OR</p>
        <Input setIsLoggedIn={setIsLoggedIn} />
      </motion.div>
    </div>
  );
};

export default Login;
