/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import React, { useEffect, Suspense, lazy, useState } from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import routes from "./routes/routes";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import { NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";
import { authOperations } from "./redux/auth";

import Preloader from "./components/Preloader/Preloader";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const homeView = lazy(() => import("./views/Main"));
const regView = lazy(() => import("./views/Register"));
const loginView = lazy(() => import("./views/Login"));
const userView = lazy(() => import("./views/User"));

function App({ histry }) {
  // const [fields, setFields] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch.authOperations.getCurrentUser();
  }, []);

  return (
    <div className="App">
      <header>
        <Header />
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
        <Footer />
      </footer>
    </div>
  );
}

export default App;
