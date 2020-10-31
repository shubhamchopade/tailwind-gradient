import React, { useState, useEffect } from "react";
import "./assets/tailwind.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import routes from "./utils/routes";
import { firebase, projectFireStore } from "./config/firebase";
import { AppContext, SavedContext } from "./store/AppContext";
import AuthRoute from "./utils/routes/AuthRoute";
import GuestRoute from "./utils/routes/GuestRoute";
import Header from "./components/Navbar";
import Loader from "./components/Loader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let [gradientData, setGradientData] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
        setIsLoading(false);
      } else {
        setUser({});
        setIsLoggedIn(false);
        setIsLoading(false);
      }
      console.log("Logged in", user.displayName);
    });
  }, []);

  if (isLoading) return <Loader />;

  return (
    <Router>
      <AppContext.Provider value={[isLoggedIn, user]}>
        <SavedContext.Provider value={[gradientData, setGradientData]}>
          <Header />
          <Switch>
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
        </SavedContext.Provider>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
