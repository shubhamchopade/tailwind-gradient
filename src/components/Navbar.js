import React, { useState, useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { firebase } from "../config/firebase";
import { AppContext } from "../store/AppContext";
import { List, ButtonPrimary, NavUserInfo } from "./theme";
import head from "../assets/images/head-img.svg";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

const Header = () => {
  const [isLoggedIn, user, isAdmin, setIsAdmin] = useContext(AppContext);
  const [toggle, setToggle] = useState(false);

  const history = useHistory();

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        history.replace("/login");
        setToggle(false);
      })
      .catch((e) => console.log(e.response.data));
    setIsAdmin(null);
  };

  return (
    <div>
      <List toggle={toggle}>
        <ul>
          <li>
            <NavLink to="/">
              <img className="w-20" src={head}></img>
            </NavLink>
          </li>
          {isLoggedIn && (
            <li>
              <NavLink to="/saved">Saved</NavLink>
            </li>
          )}
        </ul>
        <div>
          {user != null && (
            <NavUserInfo onClick={() => setToggle((prev) => !prev)}>
              {user.displayName ? (
                <>
                  <p>{user.displayName}</p>
                  <img src={user.photoURL}></img>
                </>
              ) : (
                <p>{user.email}</p>
              )}
              {isLoggedIn &&
                (toggle ? <IoMdArrowDropup /> : <IoMdArrowDropdown />)}
            </NavUserInfo>
          )}

          {isLoggedIn ? (
            toggle && (
              <>
                <p
                  className="absolute text-sm rounded mt-2 mr-2 p-2 bg-gray-300 right-0 cursor-pointer"
                  onClick={logout}
                >
                  Logout
                </p>
              </>
            )
          ) : (
            <a target="_blank" href="https://instagram.com/tech.sapien">
              <FaInstagram
                size={30}
                className="text-gray-700 hover:text-gray-900 cursor-pointer"
              />
            </a>
          )}
        </div>
      </List>
      <hr></hr>
      <p className="w-full text-center bg-red-300">
        {isAdmin == null ? "" : "Admin"}
      </p>
    </div>
  );
};

export default Header;
