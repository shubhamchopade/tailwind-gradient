import React, { useState, useEffect } from "react";
import "./assets/tailwind.css";
import { Route, Switch, useLocation } from "react-router-dom";
import routes from "./utils/routes";
import { firebase, projectFireStore } from "./config/firebase";
import { AppContext, SavedContext } from "./store/AppContext";
import AuthRoute from "./utils/routes/AuthRoute";
import GuestRoute from "./utils/routes/GuestRoute";
import Header from "./components/Navbar";
import Loader from "./components/Loader";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  let [gradientData, setGradientData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
        user.getIdTokenResult().then((idTokenResult) => {
          setIsAdmin(idTokenResult.claims.admin);
        });

        setIsLoading(false);
      } else {
        setUser({});
        setIsLoggedIn(false);
        setIsLoading(false);
      }
    });
  }, []);

  console.log(location);

  return (
    <AppContext.Provider value={[isLoggedIn, user, isAdmin, setIsAdmin]}>
      <SavedContext.Provider value={[gradientData, setGradientData]}>
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location}>
            {routes.map((route, index) => {
              if (route.path === "/login") {
                return (
                  <GuestRoute
                    key={index}
                    exact={route.exact}
                    path={route.path}
                    component={route.component}
                  />
                );
              }
              if (route.path === "/explore") {
                return (
                  <AuthRoute
                    key={index}
                    exact={route.exact}
                    path={route.path}
                    component={route.component}
                  />
                );
              }
              if (route.path === "/saved") {
                return (
                  <AuthRoute
                    key={index}
                    exact={route.exact}
                    path={route.path}
                    component={route.component}
                  />
                );
              }

              return (
                <Route
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              );
            })}
            <Route path="*">
              <h1>Not found</h1>
            </Route>
          </Switch>
        </AnimatePresence>
      </SavedContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
