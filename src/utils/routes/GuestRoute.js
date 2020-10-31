import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AppContext } from "../../store/AppContext";

const GuestRoute = (props) => {
  const [isLoggedin] = useContext(AppContext);

  if (!isLoggedin) return <Route {...props} />;

  return <Redirect to="/" />;
};

export default GuestRoute;
