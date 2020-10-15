import React, { useState, useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import {firebase} from "../config/firebase";
import { AppContext } from "../store/AppContext";
import { List, ButtonPrimary } from "./theme";
import head from "../assets/images/head-img.svg";

const Header = () => {
  const [isLoggedIn, user] = useContext(AppContext);

  const history = useHistory();

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        history.replace("/login");
      })
      .catch((e) => console.log(e.response.data));
  };

  return (
    <div>
      <List>
        <ul>
          <li>
            <NavLink to="/">
              <img src={head}></img>
            </NavLink>
          </li>
          {isLoggedIn && (
            <>
            <li>
              <NavLink to="/explore">Explore</NavLink>
            </li>
            <li>
              <NavLink to="/saved">Saved</NavLink>
            </li>
            </>
          )}
        </ul>
        <ul>
          <li>
            {isLoggedIn ? (
              <ButtonPrimary onClick={logout}>Logout</ButtonPrimary>
            ) : (
              <Link to="/login"><ButtonPrimary>Login</ButtonPrimary></Link>
            )}
          </li>
          {!isLoggedIn && (
            <li>
              <NavLink to="/signup"><ButtonPrimary>Sign Up</ButtonPrimary></NavLink>
            </li>
          )}
        </ul>
      </List>
    </div>
  );
};

export default Header;
