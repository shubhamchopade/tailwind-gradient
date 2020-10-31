import React, { useState, useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { firebase } from "../config/firebase";
import { AppContext } from "../store/AppContext";
import { List, ButtonPrimary, NavUserInfo } from "./theme";
import head from "../assets/images/head-img.svg";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Header = () => {
  const [isLoggedIn, user] = useContext(AppContext);
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
              <p
                className="absolute text-sm rounded mt-2 mr-2 p-2 bg-gray-300 right-0 cursor-pointer"
                onClick={logout}
              >
                Logout
              </p>
            )
          ) : (
            <Link to="/login">
              <ButtonPrimary initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Login
              </ButtonPrimary>
            </Link>
          )}

          {/* {!isLoggedIn && (
            <li>
              <NavLink to="/signup">
                <ButtonPrimary>Sign Up</ButtonPrimary>
              </NavLink>
            </li>
          )} */}
        </div>
      </List>
      <hr></hr>
    </div>
  );
};

export default Header;
