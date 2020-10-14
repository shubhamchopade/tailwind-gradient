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
import firebase from "./config/firebase";
import { AppContext } from "./store/AppContext";
import AuthRoute from "./utils/routes/AuthRoute";
import GuestRoute from "./utils/routes/GuestRoute";
import Header from "./components/Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
      console.log(user);
    });
  }, []);

  if (isLoading) return <h1>Loading......</h1>;

  return (
    <Router>
      <AppContext.Provider value={[isLoggedIn, user]}>
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
            if (route.path === "/gallery") {
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
      </AppContext.Provider>
    </Router>
  );
}

export default App;
