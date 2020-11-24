import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { firebase } from "../config/firebase";
import Input from "../components/Input";
import { motion } from "framer";
import { FaGoogle } from "react-icons/fa";
import { ButtonPrimary } from "../components/theme";

const Login = () => {
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
        console.log(error);
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
        className="flex items-center justify-center flex-col bg-opacity-25"
      >
        <h2 class="my-6 text-center text-xl leading-9 font-bold text-gray-700">
          Login to your account
        </h2>
        <ButtonPrimary whileTap={{ scale: 0.9 }} onClick={handleGoogle} primary>
          <FaGoogle />
          Continue with Google
        </ButtonPrimary>
        <p className="text-center text-gray-500 my-4">OR</p>
        <Input setIsLoggedIn={setIsLoggedIn} />
      </motion.div>
    </div>
  );
};

export default Login;
