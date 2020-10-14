import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AppContext } from "../../store/AppContext";

const AuthRoute = (props) => {
  const [isLoggedin] = useContext(AppContext);

  console.log(props.path)

  if (isLoggedin) return <Route {...props} />;

  return <Redirect to="/login" />;
};

export default AuthRoute;
