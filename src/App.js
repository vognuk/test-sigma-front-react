/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import React, { useEffect, Suspense, lazy } from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import routes from "./routes/routes";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import { NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";
import { authOperations } from "./redux/auth";

import Preloader from "./components/Preloader/Preloader";

const homeView = lazy(() => import("./views/Main"));
const regView = lazy(() => import("./views/Register"));
const loginView = lazy(() => import("./views/Login"));
const userView = lazy(() => import("./views/User"));

function App({ histry }) {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch.authOperations.getCurrentUser();
  }, []);

  return (
    <div className="App">
      <header>
        <NavLink to="/home" exact>
          Home
        </NavLink>
        <NavLink to="/register" exact>
          Register
        </NavLink>
        <NavLink to="/login"> Login</NavLink>
      </header>
      <main>
        <Suspense fallback={<Preloader />}>
          <Switch>
            <Route
              exact
              redirectTo="/"
              path={routes.homeView}
              component={homeView}
            />
            <PublicRoute
              public
              redirectTo="/login"
              path={routes.loginPage}
              component={loginView}
            />
            <PublicRoute
              public
              redirectTo="/register"
              path={routes.registerPage}
              component={regView}
            />
            <PrivateRoute
              redirectTo="/user"
              path={routes.userPage}
              component={userView}
            />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </main>
      <footer>
        <a
          href="https://www.linkedin.com/in/vitalii-chervonyi/"
          target="_blank"
          style={{
            position: "fixed",
            left: "0px",
            bottom: "0px",
            height: "30px",
            width: "100%",
            backgroundColor: "grey",
          }}
        >
          Creator's linkedin
        </a>
      </footer>
    </div>
  );
}

export default App;
