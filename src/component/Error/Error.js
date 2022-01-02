import React, { useState, useEffect, lazy } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./Error.css";

const Header = lazy(() => import("component/Common/Header/Header"));
const Footer = lazy(() => import("component/Common/Footer/Footer"));

export default function Error({ Error }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const auth = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (auth.user && auth.user.isLoggedIn) {
      setLoggedIn(true);
    }
  }, [auth]);

  return (
    <div>
      {loggedIn && auth.user ? (
        <Redirect to={`${auth.user.role}/dashboard`} />
      ) : (
        <Redirect to="/signIn" />
      )}
      <Header />
      <section id="error">
        <h2>Invalid URL: Could not find requested page</h2>
      </section>
      <Footer />
    </div>
  );
}
